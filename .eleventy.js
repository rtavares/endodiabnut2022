module.exports = function(eleventyConfig) {
    // 11ty configuration
    // Copy images to build site.
    eleventyConfig.addPassthroughCopy("endodiabnut2022/website/site-content//**/*.png")

    return {
        dir: {
            input: "endodiabnut2022/website/site-content/"
        }
    }
}
