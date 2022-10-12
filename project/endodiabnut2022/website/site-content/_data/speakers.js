const fs = require('fs');

const speakersData = {
    'DrAndreMonteiro':{
    'location': 'PONTA DELGADA',
    'sessions': [[['Sessão 5'], ['Diabetes e Risco Cardiovascular'], ['sessao5']],]
    },
    'DrAntonioGarrao':{
    'location': 'LISBOA',
    'sessions': [
            [['Sessão 9'], ['Tiroideia – Patologia Nodular'], ['sessao9']],
        ]
    },
    'DrBernardoMarques':{
    'location': 'LISBOA',
    'sessions': [
            [['Sessão 7'], ['Suprarrenal e HTA Endócrina'], ['sessao7']],
        ]
    },
    'DrBernardoPereira':{
    'location': 'PONTA DELGADA',
    'sessions': [
            [['Sessão 6'], ['Dislipidemia e Doenças Raras - Sindroma de Quilomicronémia Familiar'], ['sessao6']],
            [['CURSO SATÉLITE 1'], ['Insulinoterapia na Diabetes mellitus tipo 2'], ['cursosatelite1']],
        ]
    },
    'DrCarlosBello':{
    'location': 'LISBOA',
    'sessions': [
            [['Sessão 12'], ['Endocrinologia da Reprodução'], ['sessao12']],
        ]
    },
    'DrCarlosVasconcelos':{
    'location': '',
    'sessions': ['',]
    },
    'DrCelestinoNeves':{
    'location': '',
    'sessions': ['',]
    },
    'DrDanielBraga':{
    'location': '',
    'sessions': ['',]
    },
    'DrDinisMartins':{
    'location': '',
    'sessions': ['',]
    },
    'DrEmanuelDias':{
    'location': '',
    'sessions': ['',]
    },
    'DrFranciscoSousa':{
    'location': '',
    'sessions': ['',]
    },
    'DrGilResendes':{
    'location': '',
    'sessions': ['',]
    },
    'DrGoncaloGoncalves':{
    'location': '',
    'sessions': ['',]
    },
    'DrHelderSimoes':{
    'location': '',
    'sessions': ['',]
    },
    'DrHenriqueVara':{
    'location': '',
    'sessions': ['',]
    },
    'DrJoaoAnselmo':{
    'location': '',
    'sessions': ['',]
    },
    'DrJoaoSergio':{
    'location': '',
    'sessions': ['',]
    },
    'DrJorgeDores':{
    'location': '',
    'sessions': ['',]
    },
    'DrJorgePortugal':{
    'location': '',
    'sessions': ['',]
    },
    'DrJorgeVasconcelos':{
    'location': '',
    'sessions': ['',]
    },
    'DrJoseManuel':{
    'location': '',
    'sessions': ['',]
    },
    'DrJoseMaria':{
    'location': '',
    'sessions': ['',]
    },
    'DrLuisBernardo':{
    'location': '',
    'sessions': ['',]
    },
    'DrMachadoSaraiva':{
    'location': '',
    'sessions': ['',]
    },
    'DrRicardoCapitao':{
    'location': '',
    'sessions': ['',]
    },
    'DrRuiCarvalho':{
    'location': '',
    'sessions': ['',]
    },
    'DrRuiCesar':{
    'location': '',
    'sessions': ['',]
    },
    'DrRuiMendonca':{
    'location': '',
    'sessions': ['',]
    },
    'DrSequeiraDuarte':{
    'location': '',
    'sessions': ['',]
    },
    'DrSerafimRosas':{
    'location': '',
    'sessions': ['',]
    },
    'DrSilvestreAbreu':{
    'location': '',
    'sessions': ['',]
    },
    'DrSimoesPereira':{
    'location': '',
    'sessions': ['',]
    },
    'DrTiagoDias':{
    'location': '',
    'sessions': ['',]
    },
    'DraTeresaRego':{
    'location': '',
    'sessions': ['',]
    },
    'DraAliceMirante':{
    'location': '',
    'sessions': ['',]
    },
    'DraAndreiaPataco':{
    'location': '',
    'sessions': ['',]
    },
    'DraBeatrizVale':{
    'location': '',
    'sessions': ['',]
    },
    'DraCarlaDiogo':{
    'location': '',
    'sessions': ['',]
    },
    'DraCarolinaChaves':{
    'location': '',
    'sessions': ['',]
    },
    'DraCarolinaNeves':{
    'location': '',
    'sessions': ['',]
    },
    'DraCatarinaMoniz':{
    'location': '',
    'sessions': ['',]
    },
    'DraCatarinaSaraiva':{
    'location': '',
    'sessions': ['',]
    },
    'DraCidaliaPonte':{
    'location': '',
    'sessions': ['',]
    },
    'DraClaudiaAmaral':{
    'location': '',
    'sessions': ['',]
    },
    'DraClaudiaCosta':{
    'location': '',
    'sessions': ['',]
    },
    'DraClaudiaFreitas':{
    'location': '',
    'sessions': ['',]
    },
    'DraClaudiaMeneses':{
    'location': '',
    'sessions': ['',]
    },
    'DraClotildeLimbert':{
    'location': '',
    'sessions': ['',]
    },
    'DraConceicaoMarques':{
    'location': '',
    'sessions': ['',]
    },
    'DraCristinaValadas':{
    'location': '',
    'sessions': ['',]
    },
    'DraDoraSargento':{
    'location': '',
    'sessions': ['',]
    },
    'DraEgidiaMatos':{
    'location': '',
    'sessions': ['',]
    },
    'DraElizabeteRodrigues':{
    'location': '',
    'sessions': ['',]
    },
    'DraInesMendes':{
    'location': '',
    'sessions': ['',]
    },
    'DraIsabelManita':{
    'location': '',
    'sessions': ['',]
    },
    'DraIsabelPaiva':{
    'location': '',
    'sessions': ['',]
    },
    'DraIsabelSousa':{
    'location': '',
    'sessions': ['',]
    },
    'DraIsabelTorres':{
    'location': '',
    'sessions': ['',]
    },
    'DraIvoneMachado':{
    'location': '',
    'sessions': ['',]
    },
    'DraJoanaLopes':{
    'location': '',
    'sessions': ['',]
    },
    'DraJoanaMoreira':{
    'location': '',
    'sessions': ['',]
    },
    'DraLauraLemos':{
    'location': '',
    'sessions': ['',]
    },
    'DraLuizaRaimundo':{
    'location': '',
    'sessions': ['',]
    },
    'DraMafaldaMarcelino':{
    'location': '',
    'sessions': ['',]
    },
    'DraMafaldaOliveira':{
    'location': '',
    'sessions': ['',]
    },
    'DraManuelaOliveira':{
    'location': '',
    'sessions': ['',]
    },
    'DraMargaricaFerreira':{
    'location': '',
    'sessions': ['',]
    },
    'DraMargaridaBastos':{
    'location': '',
    'sessions': ['',]
    },
    'DraMariaAntonia':{
    'location': '',
    'sessions': ['',]
    },
    'DraMariaFerreira':{
    'location': '',
    'sessions': ['',]
    },
    'DraMariaJoao':{
    'location': '',
    'sessions': ['',]
    },
    'DraMarianaBettencourt':{
    'location': '',
    'sessions': ['',]
    },
    'DraMarianaChaves':{
    'location': '',
    'sessions': ['',]
    },
    'DraOlindaMarques':{
    'location': '',
    'sessions': ['',]
    },
    'DraPatriciaRocha':{
    'location': '',
    'sessions': ['',]
    },
    'DraPaulaBogalho':{
    'location': '',
    'sessions': ['',]
    },
    'DraReginaMedeiros':{
    'location': '',
    'sessions': ['',]
    },
    'DraRitaCarvalho':{
    'location': '',
    'sessions': ['',]
    },
    'DraRuteFerreira':{
    'location': '',
    'sessions': ['',]
    },
    'DraSandraPaiva':{
    'location': '',
    'sessions': ['',]
    },
    'DraSaraAmaral':{
    'location': '',
    'sessions': ['',]
    },
    'DraSaraFerreira':{
    'location': '',
    'sessions': ['',]
    },
    'DraSaraGaipo':{
    'location': '',
    'sessions': ['',]
    },
    'DraSilviaGuerra':{
    'location': '',
    'sessions': ['',]
    },
    'DraSofiaDuque':{
    'location': '',
    'sessions': ['',]
    },
    'DraSofiaTeixeira':{
    'location': '',
    'sessions': ['',]
    },
    'DraSoniaPratas':{
    'location': '',
    'sessions': ['',]
    },
    'DraTaniaParece':{
    'location': '',
    'sessions': ['',]
    },
    'DraTeresaPereira':{
    'location': '',
    'sessions': ['',]
    },
    'DraTeresaSancho':{
    'location': '',
    'sessions': ['',]
    },
    'DraTeresaSantos':{
    'location': '',
    'sessions': ['',]
    },
    'EnfFlavioToledo':{
    'location': '',
    'sessions': ['',]
    },
    'EnfManuelaMarques':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorAndreCarvalho':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorDavideCarvalho':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorEduardLimbert':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorJoaoBreda':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorJoaoRaposo':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorJoseIgnacio':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorJulioMachado':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorLuisRaposo':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorManuelBicho':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorManuelLemos':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorManuelSobrinho':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorMarioMascarenhas':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorMichaelZimmermann':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorMiguelMelo':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorPedroMarques':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorSilvaNunes':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutorValerianoLeite':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraAlexandraBento':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraAnaPaula':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraConceicaoCalhau':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraFloraCorreia':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraHelenaCardoso':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraMariaJoao':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraPaulaFreitas':{
    'location': '',
    'sessions': ['',]
    },
    'ProfDoutoraSoniado':{
        'location': '',
        'sessions': ['',]
    },
}


const location = "endodiabnut2022/website/site-content/palestrantes/images"
let speakersImages = []

fs.readdirSync(location).forEach(file => {
    let names = file.split('-')[0].split('_')

    let fullname = ''
    let speakerDataKey = `${names[0]}${names[1]}${names[2]}`
    if (names[0].slice(0, 4) === 'Prof'){
        speakerDataKey += names[3]
    }
    speakerDataKey = speakerDataKey.replace(/[^\x00-\x7F]/g, "");

    names.forEach((value, key) => {
        fullname += `${value}`
        if (key == 0) fullname += `.`
        fullname += ` `
    })

    // TBR - Debugo for deploying
    console.log('speakerDataKey: ')
    console.log(speakerDataKey)

    let speaker = {
        'fullname': fullname,
        'image': file,
        'speakerDataKey': speakerDataKey,
        'location': speakersData[speakerDataKey].location,
        'sessions': speakersData[speakerDataKey].sessions
    }
    // console.log('speakersData[speakerDataKey].location')
    // console.log(1, speakersData.speakerDataKey)
    // console.log(2, speakersData[speakerDataKey].location)
    // console.log(3, speakersData[speakerDataKey][location])
    speakersImages.push(speaker)
});

module.exports = speakersImages