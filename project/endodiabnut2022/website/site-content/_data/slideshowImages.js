// const fg = require('fast-glob')
//
// const location = `./endodiabnut2022/website/site-content/slideshow/images/*.JPG`
const location = "endodiabnut2022/website/site-content/slideshow/images"
// const slideshowImages = fg.sync([location], { dot: true });

// const testFolder = './tests/';
const fs = require('fs');

console.log('CWD: ', process.cwd())
const slideshowImages = []
fs.readdirSync(location).forEach(file => {
    slideshowImages.push(file)
  console.log(file);
});

console.log('slideshowImages')
console.log(slideshowImages)

// module.exports = {
//     slideShowImages: [1,2,3,4,5]
// }
module.exports = slideshowImages