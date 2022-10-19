const { configureMarkdownIt } = require('./endodiabnut2022/website/code/_11ty_globals/projectComponents')

// 404 page
const fs = require("fs");
const NOT_FOUND_PATH = "_site/404.html";

module.exports = function(eleventyConfig) {
    // 11ty configuration
    // Copy images to build site.
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.png")
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.{jpg,jpeg,JPG}")
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.svg")
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.pdf")
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.js")

    // Custom template filters
    function sortByDisplayOrder(values) {
        let vals = [...values];     // this *seems* to prevent collection mutation...
        return vals.sort((a, b) => Math.sign(a.data.display_order - b.data.display_order));
    }

    function debugObject(object) {
        console.log("debug: ")
        console.log(object)
    }

    // Custom template filters
    eleventyConfig.addFilter("sortByDisplayOrder", sortByDisplayOrder)
    eleventyConfig.addFilter("debugObject", debugObject)

    // Markdown extended syntax
    eleventyConfig.setLibrary('md', configureMarkdownIt())

    // 404 page config
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
          ready: function(err, bs) {

            bs.addMiddleware("*", (req, res) => {
              if (!fs.existsSync(NOT_FOUND_PATH)) {
                throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
              }

              const content_404 = fs.readFileSync(NOT_FOUND_PATH);
              // Add 404 http status code in request header.
              res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
              // Provides the 404 content without redirect.
              res.write(content_404);
              res.end();
            });
          }
        }
    })

    return {
        dir: {
            input: "./endodiabnut2022/website/site-content/",
            output: "../_site/"
        },
         passthroughFileCopy: true,
    }
}
