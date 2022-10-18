const fs = require('fs');

// Static data structure to list printed program pages

const location = "endodiabnut2022/website/site-content/programa-impresso/images"
let programPages = []

fs.readdirSync(location).forEach(file => {
    programPages.push(file)
});


module.exports = programPages