const fs = require('fs');

// Static data structure to list printed program pages

const location = "endodiabnut2022/website/site-content/programa-impresso/images"
let programPages = []

fs.readdirSync(location).forEach(file => {

    let programPage = {
        'pageName': file.split('.')[0],
        'imageFile': file,
    }

    programPages.push(programPage)
});


module.exports = programPages