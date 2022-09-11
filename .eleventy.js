module.exports = function(eleventyConfig) {
    // 11ty configuration
    // Copy images to build site.
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.png")
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.jpg")

    return {
        dir: {
            input: "endodiabnut2022/website/site-content/"
        }
    }
}
