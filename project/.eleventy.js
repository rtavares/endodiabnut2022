const { configureMarkdownIt } = require('./endodiabnut2022/website/code/_11ty_globals/projectComponents')

module.exports = function(eleventyConfig) {
    // 11ty configuration
    // Copy images to build site.
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.png")
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.{jpg, JPG}")
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

    return {
        dir: {
            input: "./endodiabnut2022/website/site-content/",
            output: "../_site/"
        },
         passthroughFileCopy: true,
    }
}
