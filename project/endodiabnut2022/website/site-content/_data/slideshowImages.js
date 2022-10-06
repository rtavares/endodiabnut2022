// const fg = require('fast-glob')
//
// const location = `./endodiabnut2022/website/site-content/slideshow/images/*.JPG`
const location = "endodiabnut2022/website/site-content/slideshow/images"
// const slideshowImages = fg.sync([location], { dot: true });

// const testFolder = './tests/';
const fs = require('fs');

const slideshowImages = []
fs.readdirSync(location).forEach(file => {
    slideshowImages.push(file)
});

module.exports = slideshowImages