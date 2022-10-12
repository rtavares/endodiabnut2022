const fs = require('fs');

// Static data structure to associate extra info to the speacker's profile
const speakersData = {
    '1':{
    'location': 'PONTA DELGADA',
    'sessions': [
            [['Sessão 5'], ['Diabetes e Risco Cardiovascular'], ['sessao5']],
        ]
    },
    '2':{
    'location': 'LISBOA',
    'sessions': [
            [['Sessão 9'], ['Tiroideia – Patologia Nodular'], ['sessao9']],
        ]
    },
    '3':{
    'location': 'LISBOA',
    'sessions': [
            [['Sessão 7'], ['Suprarrenal e HTA Endócrina'], ['sessao7']],
        ]
    },
    '4':{
    'location': 'PONTA DELGADA',
    'sessions': [
            [['Sessão 6'], ['Dislipidemia e Doenças Raras - Sindroma de Quilomicronémia Familiar'], ['sessao6']],
            [['CURSO SATÉLITE 1'], ['Insulinoterapia na Diabetes mellitus tipo 2'], ['cursosatelite1']],
        ]
    },
    '5':{
    'location': 'LISBOA',
    'sessions': [
            [['Sessão 12'], ['Endocrinologia da Reprodução'], ['sessao12']],
        ]
    },
    '6':{
    'location': '',
    'sessions': ['',]
    },
    '7':{
    'location': '',
    'sessions': ['',]
    },
    '8':{
    'location': '',
    'sessions': ['',]
    },
    '9':{
    'location': '',
    'sessions': ['',]
    },
    '10':{
    'location': '',
    'sessions': ['',]
    },
    '11':{
    'location': '',
    'sessions': ['',]
    },
    '12':{
    'location': '',
    'sessions': ['',]
    },
    '13':{
    'location': '',
    'sessions': ['',]
    },
    '14':{
    'location': '',
    'sessions': ['',]
    },
    '15':{
    'location': '',
    'sessions': ['',]
    },
    '16':{
    'location': '',
    'sessions': ['',]
    },
    '17':{
    'location': '',
    'sessions': ['',]
    },
    '18':{
    'location': '',
    'sessions': ['',]
    },
    '19':{
    'location': '',
    'sessions': ['',]
    },
    '20':{
    'location': '',
    'sessions': ['',]
    },
    '21':{
    'location': '',
    'sessions': ['',]
    },
    '22':{
    'location': '',
    'sessions': ['',]
    },
    '23':{
    'location': '',
    'sessions': ['',]
    },
    '24':{
    'location': '',
    'sessions': ['',]
    },
    '25':{
    'location': '',
    'sessions': ['',]
    },
    '26':{
    'location': '',
    'sessions': ['',]
    },
    '27':{
    'location': '',
    'sessions': ['',]
    },
    '28':{
    'location': '',
    'sessions': ['',]
    },
    '29':{
    'location': '',
    'sessions': ['',]
    },
    '30':{
    'location': '',
    'sessions': ['',]
    },
    '31':{
    'location': '',
    'sessions': ['',]
    },
    '32':{
    'location': '',
    'sessions': ['',]
    },
    '33':{
    'location': '',
    'sessions': ['',]
    },
    '34':{
    'location': '',
    'sessions': ['',]
    },
    '35':{
    'location': '',
    'sessions': ['',]
    },
    '36':{
    'location': '',
    'sessions': ['',]
    },
    '37':{
    'location': '',
    'sessions': ['',]
    },
    '38':{
    'location': '',
    'sessions': ['',]
    },
    '39':{
    'location': '',
    'sessions': ['',]
    },
    '40':{
    'location': '',
    'sessions': ['',]
    },
    '41':{
    'location': '',
    'sessions': ['',]
    },
    '42':{
    'location': '',
    'sessions': ['',]
    },
    '43':{
    'location': '',
    'sessions': ['',]
    },
    '44':{
    'location': '',
    'sessions': ['',]
    },
    '45':{
    'location': '',
    'sessions': ['',]
    },
    '46':{
    'location': '',
    'sessions': ['',]
    },
    '47':{
    'location': '',
    'sessions': ['',]
    },
    '48':{
    'location': '',
    'sessions': ['',]
    },
    '49':{
    'location': '',
    'sessions': ['',]
    },
    '50':{
    'location': '',
    'sessions': ['',]
    },
    '51':{
    'location': '',
    'sessions': ['',]
    },
    '52':{
    'location': '',
    'sessions': ['',]
    },
    '53':{
    'location': '',
    'sessions': ['',]
    },
    '54':{
    'location': '',
    'sessions': ['',]
    },
    '55':{
    'location': '',
    'sessions': ['',]
    },
    '56':{
    'location': '',
    'sessions': ['',]
    },
    '57':{
    'location': '',
    'sessions': ['',]
    },
    '58':{
    'location': '',
    'sessions': ['',]
    },
    '59':{
    'location': '',
    'sessions': ['',]
    },
    '60':{
    'location': '',
    'sessions': ['',]
    },
    '61':{
    'location': '',
    'sessions': ['',]
    },
    '62':{
    'location': '',
    'sessions': ['',]
    },
    '63':{
    'location': '',
    'sessions': ['',]
    },
    '64':{
    'location': '',
    'sessions': ['',]
    },
    '65':{
    'location': '',
    'sessions': ['',]
    },
    '66':{
    'location': '',
    'sessions': ['',]
    },
    '67':{
    'location': '',
    'sessions': ['',]
    },
    '68':{
    'location': '',
    'sessions': ['',]
    },
    '69':{
    'location': '',
    'sessions': ['',]
    },
    '70':{
    'location': '',
    'sessions': ['',]
    },
    '71':{
    'location': '',
    'sessions': ['',]
    },
    '72':{
    'location': '',
    'sessions': ['',]
    },
    '73':{
    'location': '',
    'sessions': ['',]
    },
    '74':{
    'location': '',
    'sessions': ['',]
    },
    '75':{
    'location': '',
    'sessions': ['',]
    },
    '76':{
    'location': '',
    'sessions': ['',]
    },
    '77':{
    'location': '',
    'sessions': ['',]
    },
    '78':{
    'location': '',
    'sessions': ['',]
    },
    '79':{
    'location': '',
    'sessions': ['',]
    },
    '80':{
    'location': '',
    'sessions': ['',]
    },
    '81':{
    'location': '',
    'sessions': ['',]
    },
    '82':{
    'location': '',
    'sessions': ['',]
    },
    '83':{
    'location': '',
    'sessions': ['',]
    },
    '84':{
    'location': '',
    'sessions': ['',]
    },
    '85':{
    'location': '',
    'sessions': ['',]
    },
    '86':{
    'location': '',
    'sessions': ['',]
    },
    '87':{
    'location': '',
    'sessions': ['',]
    },
    '88':{
    'location': '',
    'sessions': ['',]
    },
    '89':{
    'location': '',
    'sessions': ['',]
    },
    '90':{
    'location': '',
    'sessions': ['',]
    },
    '91':{
    'location': '',
    'sessions': ['',]
    },
    '92':{
    'location': '',
    'sessions': ['',]
    },
    '93':{
    'location': '',
    'sessions': ['',]
    },
    '94':{
    'location': '',
    'sessions': ['',]
    },
    '95':{
    'location': '',
    'sessions': ['',]
    },
    '96':{
    'location': '',
    'sessions': ['',]
    },
    '97':{
    'location': '',
    'sessions': ['',]
    },
    '98':{
    'location': '',
    'sessions': ['',]
    },
    '99':{
    'location': '',
    'sessions': ['',]
    },
    '100':{
    'location': '',
    'sessions': ['',]
    },
    '101':{
    'location': '',
    'sessions': ['',]
    },
    '102':{
    'location': '',
    'sessions': ['',]
    },
    '103':{
    'location': '',
    'sessions': ['',]
    },
    '104':{
    'location': '',
    'sessions': ['',]
    },
    '105':{
    'location': '',
    'sessions': ['',]
    },
    '106':{
    'location': '',
    'sessions': ['',]
    },
    '107':{
    'location': '',
    'sessions': ['',]
    },
    '108':{
    'location': '',
    'sessions': ['',]
    },
    '109':{
    'location': '',
    'sessions': ['',]
    },
    '110':{
    'location': '',
    'sessions': ['',]
    },
    '111':{
    'location': '',
    'sessions': ['',]
    },
    '112':{
    'location': '',
    'sessions': ['',]
    },
    '113':{
    'location': '',
    'sessions': ['',]
    },
    '114':{
    'location': '',
    'sessions': ['',]
    },
    '115':{
    'location': '',
    'sessions': ['',]
    },
    '116':{
    'location': '',
    'sessions': ['',]
    },
    '117':{
    'location': '',
    'sessions': ['',]
    },
    '118':{
    'location': '',
    'sessions': ['',]
    },
    '119':{
        'name': 'Luis Dias',
        'location': 'PONTA DELGADA',
        'sessions':[
            [['Sessão 2'], ['Diabetes - Diagnóstico e Monitorização'], ['sessao2']],
        ]
    },
}


const location = "endodiabnut2022/website/site-content/palestrantes/images"
let speakersImages = []

fs.readdirSync(location).forEach(file => {
    let names = file.split('_')

    let fullname = ''
    let title = ''
    let nameArrayOffset = 1 // To skip key reference and title on name
    let speakerDataKey = names[0]

    if (names[1] === ' Prof') {
        title = `${names[1]}. ${names[2]} `
        nameArrayOffset = 2  // To skip key reference and double title on name
    } else {
        title = `${names[1]}. `
    }

    // build full name
    names.forEach((value, key) => {
        // Skips file extension
        if (key > nameArrayOffset && !(value.includes('.'))) {
            fullname += `${value}`
        }
        fullname += ` `
    })

    let speaker = {
        'title': title,
        'fullname': fullname,
        'image': file,
        'speakerDataKey': speakerDataKey,
        'location': speakersData[speakerDataKey].location,
        'sessions': speakersData[speakerDataKey].sessions
    }
    speakersImages.push(speaker)
});

// Sort array by full name before returning it.
speakersImages.sort((a, b) => a.fullname.toLowerCase() > b.fullname.toLowerCase() ? 1 : -1)

module.exports = speakersImages