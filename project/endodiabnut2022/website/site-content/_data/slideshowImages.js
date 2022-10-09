const fs = require('fs');

const location = "endodiabnut2022/website/site-content/slideshow/images"
let slideshowImages = []

function randomizeArray(array) {
    let currentId = array.length
    let randomizedArray = []

    while (currentId !== 0) {
        let randomId = Math.floor(Math.random() * currentId)
        currentId -= 1
        randomizedArray.push(array[randomId])
    }

    return randomizedArray
}

fs.readdirSync(location).forEach(file => {
    slideshowImages.push(file)
});

module.exports = randomizeArray(slideshowImages)