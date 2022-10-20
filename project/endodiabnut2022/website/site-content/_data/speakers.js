const fs = require('fs');

// Static data structure to associate extra info to the speacker's profile
const speakersData = {
    '1': {
        'name': 'Dr. André Monteiro',
        'location': 'PONTA DELGADA',
        'sessions': [
            [
                ['Sessão 5'],
                ['Quarta, 26'],
                ['HTA NA DIABETES: INDIVIDUALIZAR AO LONGO DA VIDA'],
                ['26/26-1-Sessao5/detail/']
            ],
        ]
    },
    '2': {
        'name': "Dr. António Garrão",
        'location': 'LISBOA',
        'sessions':[
            [
                ['Sessão 9'],
                ["Quinta, 27"],
                ['TIREOTOXICOSE – DO DIGNÓSTICO DIFERENCIAL À OPÇÃO TERAPêUTICA'],
                ['27/27-1-Sessao9/detail/']
            ],
        ]
    },
    '3': {
        'name': "Dr. Bernardo Marques",
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 7'],
                ["Quarta, 26"],
                ['HIPERTENSÃO ARTERIAL ANTES DOS 40 – CHEGA MEDICAR?'],
                ['26/26-8-Sessao7/detail/']
            ],
        ]
    },
    '4': {
        'name': 'Dr. Bernardo Pereira',
        'location': 'PONTA DELGADA',
        'sessions': [
            [
                ['Sessão 6'],
                ["Quarta, 26"],
                ['DESAFIOS NO DIAGNÓSTICO'],
                ['26/26-3-Sessao6/detail/'],
            ],
            [
                ['CURSO SATÉLITE 2'],
                ["Quinta, 27"],
                ['INSULINOTERAPIA NA DIABETES MELLITUS TIPO 2'],
                ['27/27-11-CursoSatelite1/detail/'],
            ]
        ]
    },
    '5': {
        'name': 'Dr. Carlos Bello',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 12'],
                ['Sexta, 28'],
                ['AMENORREIA NOS CUIDADOS PRIMARIOS DE SAÚDE'],
                ['28/28-3-Sessao12/detail/']
            ]
        ]
    },
    '6': {
        'name': 'Dr. Carlos Vasconcelos',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 13'],
                ['Sexta, 28'],
                ['Endocrinologia Pediátrica'],
                ['28/28-6-Sessao13/detail/']
            ]
        ]
    },
    '7': {
        'name': 'Dr. Celestino Neves',
        'location': 'PORTO',
        'sessions': [
            [
                ['DISCUSSÃO DE POSTERS'],
                ['Sexta, 28'],
                ['DISCUSSÃO DE POSTERS'],
                ['#S28']
            ]
        ]
    },
    '8': {
        'name': 'Dr. Daniel Braga',
        'location': 'BRAGA',
        'sessions':[
            [
                ['DISCUSSÃO DE POSTERS'],
                ["Sexta, 28"],
                ['DISCUSSÃO DE POSTERS'],
                ['#S28'],
            ]
        ]
    },
    '9': {
        'name': 'Dr. Dinis Martins',
        'location': 'PONTA DELGADA',
        'sessions': [
            [
                ['Sessão 5'],
                ['Quarta, 26'],
                ['Diabetes e Risco Cardiovascular'],
                ['26/26-1-Sessao5/detail/']
            ],
        ]
    },
    '10': {
        'name': 'Dr. Emanuel Dias',
        'location': 'PONTA DELGADA',
        'sessions':[
            [
                ['Sessão 3'],
                ['Terça, 25'],
                ['Diabetes - Complicações'],
                ['25/25-4-Sessao3/detail/']
            ],
        ]

    },
    '11': {
       'name': 'Dr. Francisco Sousa Santos',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 12'],
               ['Sexta, 28'],
               ['A EPIDEMIA DOS ESTEROIDES ANABOLIZANTES - SUSPEITA – RASTREIO – COMPLICAÇÕES'],
               ['28/28-3-Sessao12/detail/']
           ]
       ]
    },
    '12': {
       'name': 'Dr. Gil Resendes',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 3'],
               ['Terça, 25'],
               ['Diabetes - Complicações'],
               ['25/25-4-Sessao3/detail/']
           ]
       ]
    },
    '13': {
       'name': 'Dr. Gonçalo Gonçalves',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 14'],
               ["Sexta, 28"],
               ['Incongruência de Género'],
               ['28/28-7-Sessao14/detail/']
           ]
       ]
    },
    '14': {
       'name': 'Dr. Helder Simões',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 9'],
               ["Quinta, 27"],
               ['DISFUNÇÕES SUBCLíNICAS DA TIROIDEIA–QUEM TRATAR E QUANDO?'],
               ['27/27-1-Sessao9/detail/']
           ]
       ]
    },
    '15': {
       'name': 'Dr. Henrique Vara Luís',
       'location': 'ALMADA',
       'sessions': [
           [
               ['Sessão 12'],
               ["Sexta, 28"],
               ['HIRSUTIMO NOS CUIDADOS PRIMáRIOS DE SAÚDE'],
               ['28/28-3-Sessao12/detail/']
           ]
       ]
    },
    '16': {
       'name': 'Dr. João Sérgio Neves',
       'location': 'PORTO',
       'sessions': [
           [
               ['Sessão 3'],
               ['Terça, 25'],
               ['RETINOPATIA DIABÉTICA: QUAL A EVIDÊNCIA FARMACOLÓGICA NA PREVENÇÃO'],
               ['25/25-4-Sessao3/detail/']
           ]
       ]
    },
    '17': {
       'name': 'Dr. João Anselmo',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 11'],
               ["Sexta, 28"],
               ['Patologia Hipofisária'],
               ['28/28-2-Sessao11/detail/']
           ]
       ]
    },
    '18': {
       'name': 'Dr. Jorge Dores',
       'location': 'PORTO',
       'sessions': [
           [
               ['DISCUSSÃO DE POSTERS'],
               ['Sexta, 28'],
               ['DISCUSSÃO DE POSTERS'],
               ['#S28']
           ]
       ]
    },
    '19': {
       'name': 'Dr. Jorge Portugal',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 1'],
               ['Terça, 25'],
               ['Diabetes - Epidemiologia'],
               ['25/25-1-Sessao1/detail/']
           ]
       ]
    },
    '20': {
       'name': 'Dr. Jorge Vasconcelos',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 5'],
               ['Quarta, 26'],
               ['CONTRACEPÇÃO NA DIABETES'],
               ['26/26-1-Sessao5/detail/']
           ]
       ]
    },
    '21': {
       'name': 'Dr. José Manuel Boavida',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 1'],
               ['Terça, 25'],
               ['EFEITOS DA PANDEMIA NA DIABETES'],
               ['25/25-1-Sessao1/detail/']
           ]
       ]
    },
    '22': {
       'name': 'Dr. José Maria Aragües',
       'location': 'LOURES',
       'sessions': [
           [
               ['Sessão 9'],
               ["Quinta, 27"],
               ['Tiroideia – Patologia Nodular'],
               ['27/27-1-Sessao9/detail/']
           ]
       ]
    },
    '23': {
       'name': 'Dr. Luís Bernardo',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 9'],
               ["Quinta, 27"],
               ['Tiroideia – Patologia Nodular'],
               ['27/27-1-Sessao9/detail/']
           ]
       ]
    },
    '24': {
       'name': 'Dr. Machado Saraiva',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 1'],
               ['Terça, 25'],
               ['Diabetes - Epidemiologia'],
               ['25/25-1-Sessao1/detail/']
           ]
       ]
    },
    '25': {
       'name': 'Dr. Ricardo Capitão',
       'location': 'ALMADA',
       'sessions': [
           [
               ['Sessão 4'],
               ['Terça, 25'],
               ['Individualização Terapêutica na Diabetes - NO IDOSO'],
               ['25/25-6-Sessao4/detail/']
           ]
       ]
    },
    '26': {
       'name': 'Dr. Rui Carvalho',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 11'],
               ["Sexta, 28"],
               ['Patologia Hipofisária'],
               ['28/28-2-Sessao11/detail/']
           ]
       ]
    },
    '27': {
       'name': 'Dr. Rui César',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['CONFERÊNCIA'],
               ["Quinta, 27"],
               ['INSEGURANÇA ALIMENTAR NA EUROPA DE HOJE'],
               ['#Q27']
           ]
       ]
    },
    '28': {
       'name': 'Dr. Rui Mendonça',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 12'],
               ['Sexta, 28'],
               ['Endocrinologia da Reprodução'],
               ['28/28-3-Sessao12/detail/']
           ]
       ]
    },
    '29': {
       'name': 'Dr. Sequeira Duarte',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 6'],
               ["Quarta, 26"],
               ['DESAFIOS NO TRATAMENTO'],
               ['26/26-3-Sessao6/detail/'],
           ]
       ]
    },
    '30': {
       'name': 'Dr. Serafim Rosas',
       'location': 'Leiria',
       'sessions': [
           [
               ['Sessão 7'],
               ["Quarta, 26"],
               ['Suprarrenal e HTA Endócrina'],
               ['26/26-8-Sessao7/detail/']
           ]
       ]
    },
    '31': {
    'name': 'Dr. Silvestre Abreu',
    'location': 'FUNCHAL',
    'sessions':[
            [
                ['Sessão 10'],
                ['Quinta, 27'],
                ['Alimentação'],
                ['27/27-4-Sessao10/detail/']
            ],
        ]
    },
    '32': {
       'name': 'Dr. Simões Pereira',
       'location': 'AVEIRO',
       'sessions': [
           [
               ['Sessão 1'],
               ['Terça, 25'],
               ['Diabetes - Epidemiologia'],
               ['25/25-1-Sessao1/detail/']
           ]
       ]
    },
    '33': {
        'name': 'Dr. Tiago Dias',
        'location': 'VILA FRANCA',
        'sessions':[
            [
                ['CURSO SATÉLITE 2'],
                ["Quinta, 27"],
                ['SARCOPENIA EM AMBIENTE HOSPITALAR'],
                ['27/27-12-CursoSatelite2/detail/'],
            ]
        ]
    },
    '34': {
        'name': "Dra. Alice Mirante",
        'location': 'COIMBRA',
        'sessions':[
            [
                ['Sessão 13'],
                ["Sexta, 28"],
                ['Endocrinologia Pediátrica'],
                ['28/28-6-Sessao13/detail/']
            ],
        ]
    },
    '35': {
        'name': "Dra. Andreia Pataco",
        'location': 'PONTA DELGADA',
        'sessions':[
            [
                ['Curso Satélite 1 - Sala 2'],
                ["Quinta, 27"],
                ['Casos Clínicos'],
                ['27/27-11-CursoSatelite1/detail/']
            ],
            [
                ['Sessão 13'],
                ['Sexta, 28'],
                ['OBESIDADE INFANTIL – COMORBILIDADES E ABORDAGEM TERAPêUTICA'],
                ['28/28-6-Sessao13/detail/']
            ]
        ]
    },
    '36': {
        'name': "Dra. Beatriz Vale",
        'location': ' PONTA DELGADA',
        'sessions':[
            [
                ['CURSO SATÉLITE 2'],
                ["Quinta, 27"],
                ['SARCOPENIA EM AMBIENTE HOSPITALAR'],
                ['27/27-12-CursoSatelite2/detail/'],
            ],
        ]
    },
    '37': {
        'name': 'Dra. Carla Diogo',
        'location': ' COIMBRA',
        'sessions':[
            [
                ['Sessão 14'],
                ["Sexta, 28"],
                ['Incongruência de Género'],
                ['28/28-7-Sessao14/detail/']
            ],
        ]
    },
    '38': {
        'name': 'Dra. Carolina Chaves',
        'location': 'Ponta Delgada',
        'sessions': [
            [
                ['Curso Satélite 1'],
                ['Quinta, 27'],
                ['INSULINOTERAPIA NA DIABETES MELLITUS TIPO 2'],
                ['27/27-11-CursoSatelite1/detail/']
            ],
            [
                ['Curso Satélite 1 - Sala 1'],
                ['Quinta, 27'],
                ['Auto Monitorização da Glicemia e Acertos Terapêuticos'],
                ['27/27-11-CursoSatelite1/detail/']
            ],
            [
               ['Sessão 11'],
               ["Sexta, 28"],
               ['Patologia Hipofisária'],
               ['28/28-2-Sessao11/detail/']
           ]
        ]
    },
    '39': {
        'name': 'Dra. Carolina Neves',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 4'],
                ['Terça, 25'],
                ['Individualização Terapêutica na Diabetes - NO OBESO'],
                ['25/25-6-Sessao4/detail/']
            ]
        ]
      },
    '40': {
        'name': 'Dra. Catarina Moniz',
        'location': 'PONTA DELGADA',
        'sessions': [
            [
                ['Sessão 2'],
                ['Terça, 25'],
                ['Diabetes - Diagnóstico e Monitorização'],
                ['25/25-2-1-Sessao2/detail/']
            ],
            [
                ['Sessão 8'],
                ["Quarta, 26"],
                ['IODO NOS AÇORES'],
                ['26/26-11-Sessao8/detail/']
            ],
            [
                ['CURSO SATÉLITE 1'],
                ["Quinta, 27"],
                ['INSULINOTERAPIA NA DIABETES MELLITUS TIPO 2'],
                ['27/27-11-CursoSatelite1/detail/'],
            ]
        ]
    },
    '41': {
        'name': 'Dra. Catarina Saraiva',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 4'],
                ['Terça, 25'],
                ['Individualização Terapêutica na Diabetes'],
                ['25/25-6-Sessao4/detail/']
            ]
        ]
    },
    '42': {
        'name': 'Dra. Cidália Ponte',
        'location': 'Ponta Delgada',
        'sessions': [
            [
                ['IX Simpósio Satélite - Mesa 1'],
                ['Quinta, 27'],
                ['SUPORTE NUTRICIONAL NO DOENTE RENAL SEM TRS'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '43': {
        'name': 'Dra. Cláudia Amaral',
        'location': 'PORTO',
        'sessions': [
            [
                ['Sessão 11'],
                ['Sexta, 28'],
                ['HIPERPROLACTINÉMIA'],
                ['28/28-2-Sessao11/detail/']
            ]
        ]
    },
    '44': {
        'name': 'Dra. Cláudia Costa',
        'location': 'PORTO',
        'sessions': [
            [
                ['Sessão 7'],
                ['Quarta, 26'],
                ['TUMORES FUNCIONANTES DA SUPRARRENAL NOS CUIDADOS PRIMÁRIOS DE SAÚDE'],
                ['26/26-8-Sessao7/detail/']
            ]
        ]
    },
    '45': {
        'name': 'Dra. Cláudia Freitas',
        'location': 'PORTO',
        'sessions': [
            [
                ['Sessão 3'],
                ['Terça, 25'],
                ['POLINEUROPATIA DIABéTICA: DA AVALIAÇÃO DIAGNÓSTICA À TERAPêUTICA'],
                ['25/25-4-Sessao3/detail/']
            ]
        ]
    },
    '46': {
        'name': 'Dra. Cláudia Meneses',
        'location': 'Angra do Heroísmo',
        'sessions': [
            [
                ['IX Simpósio Satélite - Mesa 1'],
                ["Quinta, 27"],
                ['SIMPÓSIO DE NUTRIÇÃO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '47': {
        'name': 'Dra. Clotilde Limbert',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 4'],
                ['Terça, 25'],
                ['Individualização Terapêutica na Diabetes'],
                ['25/25-6-Sessao4/detail/']
            ]
        ]
    },
    '48': {
       'name': 'Dra. Conceição Marques',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 11'],
               ["Sexta, 28"],
               ['Patologia Hipofisária'],
               ['28/28-2-Sessao11/detail/']
           ]
       ]
    },
    '49':{
    'location': '',
    'sessions': ['',]
    },
    '50': {
        'name': 'Dra. Dora Sargento',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 5'],
                ['Quarta, 26'],
                ['Diabetes e Risco Cardiovascular'],
                ['26/26-1-Sessao5/detail/']
            ],
        ]
    },
    '51': {
    'name': 'Dra. Egídia Matos',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite'],
                ["Quinta, 27"],
                ['MPLEMENTAÇÃO DO RASTREIO NUTRICIONAL NO HDES'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '52': {
        'name': 'Dra. Elizabete Rodrigues',
        'location': 'PORTO',
        'sessions': [
            [
                ['Sessão 5'],
                ['Quarta, 26'],
                ['DISLIPIDEMIA NA DIABETES: QUE ALVOS E PARA QUEM?'],
                ['26/26-1-Sessao5/detail/']
            ],
        ]
    },
    '53': {
    'name': 'Dra. Ines Mendes',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['NGESTÃO DE SAL, ATÉ QUANTO A REDUÇÃO É SAUDáVEL?'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '54': {
        'name': "Dra. Isabel Manita",
        'location': 'ALMADA',
        'sessions':[
            [
                ['Sessão 9'],
                ["Quinta, 27"],
                ['A PANDEMIA DO NÓDULO DA TIROIDEIA – ESTAMOS A FAZER CITOLOGIAS A MAIS?'],
                ['27/27-1-Sessao9/detail/']
            ],
        ]
    },
    '55': {
        'name': 'Dra. Isabel Paiva',
        'location': 'COIMBRA',
        'sessions':[
            [
                ['Sessão 12'],
                ['Sexta, 28'],
                ['O PAPEL DO ENDOCRINOLOGISTA'],
                ['28/28-3-Sessao12/detail/']
            ],
        ]
    },
    '56': {
        'name': 'Dra. Isabel Sousa',
        'location': 'PONTA DELGADA',
        'sessions': [
            [
               ['Sessão 1'],
               ['Terça, 25'],
               ['EPIDEMIOLOGIA DA DIABETES MELLITUS NOS AÇORES'],
               ['25/25-1-Sessao1/detail/']
            ],
            [
               ['Sessão 8'],
               ["Quarta, 26"],
               ['IODO NAS GRÁVIDAS'],
               ['26/26-11-Sessao8/detail/']
            ]
        ]
    },
    '57': {
        'name': 'Dra. Isabel Torres',
        'location': 'PORTO',
        'sessions':[
            [
                ['Sessão 6'],
                ["Quarta, 26"],
                ['Dislipidemia e Doenças Raras - Sindroma de Quilomicronémia Familiar'],
                ['26/26-3-Sessao6/detail/']
            ],
        ]
    },
    '58': {
    'name': 'Dra. Ivone Machado',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 1'],
                ["Quinta, 27"],
                [' SUPORTE NUTRICIONAL NO DOENTE ONCOLÓGICO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ],
            [
                ['CURSO SATÉLITE 2'],
                ["Quinta, 27"],
                ['SARCOPENIA EM AMBIENTE HOSPITALAR'],
                ['27/27-12-CursoSatelite2/detail/'],
            ]
        ]
    },
    '59': {
    'name': 'Dra. Joana Lopes',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['JEJUM INTERMITENTE OU RESTRIÇÃO CALÓRICA?'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '60': {
       'name': 'Dra. Joana Moreira',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 14'],
               ["Sexta, 28"],
               ['O PAPEL DA COMUNIDADE, PROJECTO (A)MAR AÇORES'],
               ['28/28-7-Sessao14/detail/']
           ]
       ]
    },
    '61': {
    'name': 'Dra. Laura Lemos',
    'location': 'Angra do Heroísmo',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['ALIMENTAÇÃO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '62': {
        'name': "Dra. Luiza Raimundo",
        'location': 'ALMADA',
        'sessions':[
            [
                ['Sessão 13'],
                ["Sexta, 28"],
                ['Endocrinologia Pediátrica'],
                ['28/28-6-Sessao13/detail/']
            ],
        ]
    },
    '63': {
    'name': 'Dra. Mafalda Marcelino',
    'location': 'LISBOA',
    'sessions':[
            [
                ['Sessão 10'],
                ['Quinta, 27'],
                ['Alimentação'],
                ['27/27-4-Sessao10/detail/']
            ],
        ]
    },
    '64': {
    'name': 'Dra. Mafalda Oliveira',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['ALIMENTAÇÃO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '65': {
        'name': 'Dra. Manuela Oliveira',
        'location': 'LISBOA',
        'sessions':[
            [
                ['DISCUSSÃO DE POSTERS'],
                ["Sexta, 28"],
                ['DISCUSSÃO DE POSTERS'],
                ['#S28'],
            ]
        ]
    },
    '66': {
        'name': 'Dra. Margarida Ferreira',
        'location': 'FUNCHAL',
        'sessions':[
            [
                ['Sessão 6'],
                ["Quarta, 26"],
                ['Dislipidemia e Doenças Raras - Sindroma de Quilomicronémia Familiar'],
                ['26/26-3-Sessao6/detail/']
            ],
        ]
    },
    '67': {
        'name': 'Dra. Margarida Bastos',
        'location': 'COIMBRA',
        'sessions':[
            [
                ['CONFERÊNCIA'],
                ['Sexta, 28'],
                ['HORMONA DO CRESCIMENTO DE LONGA DURAÇÃO'],
                ['#S28']
            ],
            [
               ['Sessão 14'],
               ["Sexta, 28"],
               ['Incongruência de Género'],
               ['28/28-7-Sessao14/detail/']
           ]
        ]
    },
    '68': {
        'name': 'Dra. Maria Antónia Duarte',
        'location': 'PONTA DELGADA',
        'sessions': [
            [
                ['Sessão 3'],
                ['Terça, 25'],
                ['Diabetes - Complicações'],
                ['25/25-4-Sessao3/detail/']
            ]
        ]
    },
    '69':  {
        'name': 'Dra. Maria Ferreira',
        'location': 'Ponta Delgada',
        'sessions': [
            [
                ['IX Simpósio Satélite - Mesa 1'],
                ['Quinta, 27'],
                [' MONITORIZAÇÃO DO SUPORTE NUTRICIONAL HOSPITALAR NO HDES'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '70': {
    'name': 'Dra. Maria João Eleutério',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 1'],
                ["Quinta, 27"],
                ['SUPORTE NUTRICIONAL NO DOENTE CIRÚRGICO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '71': {
       'name': 'Dra. Mariana Bettencourt',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 14'],
               ["Sexta, 28"],
               ['O PONTO DE VISTA DO PSIQUIATRA'],
               ['28/28-7-Sessao14/detail/']
           ]
       ]
    },
    '72': {
       'name': 'Dra. Mariana Chaves',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 7'],
               ["Quarta, 26"],
               ['INCIDENTALOMA DA SUPRARRENAL – QUE ASPECTOS RADIOLÓGICOS CONSIDERAR'],
               ['26/26-8-Sessao7/detail/']
           ]
       ]
    },
    '73': {
       'name': 'Dra. Olinda Marques',
       'location': 'BRAGA',
       'sessions': [
           [
               ['Sessão 7'],
               ["Quarta, 26"],
               ['Suprarrenal e HTA Endócrina'],
               ['26/26-8-Sessao7/detail/']
           ]
       ]
    },
    '74': {
    'name': 'Dra. Patricia Rocha',
    'location': 'VILA DO PORTO',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['OBESIDADE NO ADULTO, BASTA A DIETA?'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '75':  {
        'name': 'Dra. Paula Bogalho',
        'location': 'LISBOA',
        'sessions':[
            [
                ['Sessão 8'],
                ["Quarta, 26"],
                ['Tiroideia e o Iodo'],
                ['26/26-11-Sessao8/detail/']
            ],
        ]
    },
    '76': {
    'name': 'Dra. Regina Medeiros',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['CURSO SATÉLITE 1'],
                ["Quinta, 27"],
                ['INSULINOTERAPIA NA DIABETES MELLITUS TIPO 2'],
                ['27/27-11-CursoSatelite1/detail/'],
            ],
            [
                ['CURSO SATÉLITE 1 - Sala 1'],
                ["Quinta, 27"],
                ['Revisão Teórica: Tipos de Insulina, quando Iniciar e Como Iniciar'],
                ['27/27-11-CursoSatelite1/detail/'],
            ],
            [
                ['Sessão 13'],
                ['Sexta, 28'],
                ['BAIXA ESTATURA – COMO AVALIAR E QUANDO REFERENCIAR?'],
                ['28/28-6-Sessao13/detail/']
            ]
        ]
    },
    '77': {
    'name': 'Dra. Rita Carvalho',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['Sessão 10'],
                ['Quinta, 27'],
                ['Alimentação'],
                ['27/27-4-Sessao10/detail/']
            ],
            [
                ['IX Simpósio Satélite'],
                ["Quinta, 27"],
                ['SIMPÓSIO DE NUTRIÇÃO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '78': {
        'name': 'Dra. Rute Ferreira',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 13'],
                ['Sexta, 28'],
                ['PUBERDADE PRECOCE'],
                ['28/28-6-Sessao13/detail/']
            ]
        ]
    },
    '79': {
       'name': 'Dra. Sandra Paiva',
       'location': 'PONTA DELGADA',
       'sessions': [
           [
               ['Sessão 14'],
               ["Sexta, 28"],
               ['O PAPEL DO ENDOCRINOLOGISTA'],
               ['28/28-7-Sessao14/detail/']
           ]
       ]
    },
    '80': {
       'name': 'Dr. Ricardo Capitão',
       'location': 'ALMADA',
       'sessions': [
           [
               ['Sessão 4'],
               ['Terça, 25'],
               ['Individualização Terapêutica na Diabetes - NO DOENTE CARDIORRENAL'],
               ['25/25-6-Sessao4/detail/']
           ]
       ]
    },
    '81': {
    'name': 'Dra. Sara Ferreira',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['QUANTO SAL INGERIMOS?'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '82': {
    'name': 'Dra. Sara Gaipo',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['ALIMENTAÇÃO E DOENTE EM CUIDADOS PALIATIVOS'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '83': {
        'name': 'Dra. Sílvia Guerra',
        'location': 'LOURES',
        'sessions':[
            [
                ['Sessão 12'],
                ['Sexta, 28'],
                ['Endocrinologia da Reprodução'],
                ['28/28-3-Sessao12/detail/']
            ],
        ]    },
    '84': {
    'name': 'Dra. Sofia Duque',
    'location': 'LISBOA',
    'sessions':[
            [
                ['Sessão 10'],
                ['Quinta, 27'],
                ['SUPORTE NUTRICIONAL COMO ALIADO TERAPÊUTICO NO DOENTE HOSPITALAR'],
                ['27/27-4-Sessao10/detail/']
            ],
            [
                ['CURSO SATÉLITE 2'],
                ["Quinta, 27"],
                ['SARCOPENIA EM AMBIENTE HOSPITALAR'],
                ['27/27-12-CursoSatelite2/detail/'],
            ]
        ]
    },
    '85': {
       'name': 'Dra. Sofia Teixeira',
       'location': 'PORTO',
       'sessions': [
           [
               ['Sessão 2'],
               ['Terça, 25'],
               ['AUTO-MONITORIZAÇÃO DA GLICÉMIA: TIPOS, PARA QUÊ E PARA QUEM?'],
               ['25/25-2-1-Sessao2/detail/']
           ]
       ]
    },
    '86':  {
        'name': 'Dra. Sónia Pratas',
        'location': 'LOURES',
        'sessions':[
            [
                ['Sessão 8'],
                ["Quarta, 26"],
                ['Tiroideia e o Iodo'],
                ['26/26-11-Sessao8/detail/']
            ],
        ]
    },
    '87': {
    'name': 'Dra. Tânia Parece',
    'location': 'POVOAÇÃO',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['OBESIDADE INFANTIL E ALIMENTOS HFSS'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '88': {
       'name': 'Dra. Teresa Pereira',
       'location': 'PORTO',
       'sessions': [
           [
               ['Sessão 7'],
               ["Quarta, 26"],
               ['Suprarrenal e HTA Endócrina'],
               ['26/26-8-Sessao7/detail/']
           ]
       ]
    },
    '89': {
        'name': 'Dra. Teresa Rego',
        'location': 'Angra do Heroísmo',
        'sessions': [
            [
                ['Sessão 5'],
                ['Quarta, 26'],
                ['Diabetes e Risco Cardiovascular'],
                ['26/26-1-Sessao5/detail/']
            ],
        ]
    },
    '90': {
    'name': 'Dra. Teresa Sancho',
    'location': 'FARO',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 2'],
                ["Quinta, 27"],
                ['ALIMENTAÇÃO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '91': {
    'name': 'Dra. Teresa Santos',
    'location': 'Angra do Heroísmo',
    'sessions':[
            [
                ['IX Simpósio Satélite - Mesa 1'],
                ["Quinta, 27"],
                ['SIMPÓSIO DE NUTRIÇÃO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ]
        ]
    },
    '92': {
    'name': 'Enf. Flávio Toledo',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['CURSO SATÉLITE 1 - Sala 2'],
                ["Quinta, 27"],
                ['spetos Práticos da Insulinoterapia'],
                ['27/27-11-CursoSatelite1/detail/'],
            ]
        ]
    },
    '93': {
    'name': 'Enfª. Manuela Marques',
    'location': 'PONTA DELGADA',
    'sessions':[
            [
                ['CURSO SATÉLITE 1 - Sala 2'],
                ["Quinta, 27"],
                ['spetos Práticos da Insulinoterapia'],
                ['27/27-11-CursoSatelite1/detail/'],
            ]
        ]
    },
    '94':  {
       'name': 'Dra. Sofia Teixeira',
       'location': 'PORTO',
       'sessions': [
           [
               ['Sessão 2'],
               ['Terça, 25'],
               ['DIABETES MELLITUS TIPO 2 - QUE FENÓTIPOS CONSIDERAR PARA MELHOR TRATAR?'],
               ['25/25-2-1-Sessao2/detail/']
           ]
       ]
    },
    '95': {
        'name': "Prof. Doutor Davide Carvalho",
        'location': 'PORTO',
        'sessions':[
            [
                ['CONFERÊNCIA'],
                ["Quinta, 27"],
                ['ALIMENTAÇÃO E CANCRO'],
                ['#Q27']
            ],
        ]
    },
    '96': {
        'name': "Prof. Doutor Eduard Limbert",
        'location': 'LISBOA',
        'sessions': [
            [
                ['CONFERÊNCIA'],
                ["Quarta, 26"],
                ['A PROBLEMÁTICA DA IODO-DEFICIÊNCIA'],
                ['#Q26']
            ],
            [
                ['Sessão 8'],
                ["Quarta, 26"],
                ['Tiroideia e o Iodo'],
                ['26/26-11-Sessao8/detail/']
            ],
        ]
    },
    '97':  {
       'name': 'Prof. Doutor João Breda',
       'location': 'OMS-EUROPA',
       'sessions': [
           [
               ['CONFERÊNCIA'],
               ["Quinta, 27"],
               ['INSEGURANÇA ALIMENTAR NA EUROPA DE HOJE'],
               ['#Q27']
           ]
       ]
    },
    '98': {
       'name': 'Prof. Doutor João Raposo',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 1'],
               ['Terça, 25'],
               ['OBSERVATÓRIO NACIONAL DE DIABETES'],
               ['25/25-1-Sessao1/detail/']
           ]
       ]
    },
    '99': {
        'name': 'Prof. Doutor José Ignácio Labarta',
        'location': 'SARAGOÇA',
        'sessions':[
            [
                ['CONFERÊNCIA'],
                ['Sexta, 28'],
                ['HORMONA DO CRESCIMENTO DE LONGA DURAÇÃO'],
                ['#S28']
            ],
        ]
    },
    '100': {
        'name': "Prof. Doutor Júlio Machado Vaz",
    'location': 'PORTO',
    'sessions':[
            [
                ['CONFERÊNCIA'],
                ["Sexta, 28"],
                ['DETERMINANTES SOCIAIS DA SAÚDE?'],
                ['#S28']
            ],
        ]
    },
    '101': {
        'name': 'Prof. Doutor Luís Raposo',
    'location': 'LISBOA',
    'sessions':[
            [
                ['Sessão 9'],
                ["Quinta, 27"],
                ['Tiroideia – Patologia Nodular'],
                ['27/27-1-Sessao9/detail/']
            ],
        ]
    },
    '102':{
    'name': 'Prof. Doutor Manuel Bicho',
    'location': 'LISBOA',
    'sessions':[
            [
                ['CONFERÊNCIA'],
                ["Quarta, 26"],
                ['REFLEXO INFLAMATÓRIO NA DIABETES E NO RISCO CARDIOVASCULAR'],
                ['#Q26']
            ],
        ]
    },
    '103':{
    'name': 'Prof. Doutor Manuel Lemos',
    'location': 'COVILHÃ',
    'sessions':[
            [
                ['Sessão 11'],
                ["Sexta, 28"],
                ['Patologia Hipofisária'],
                ['28/28-2-Sessao11/detail/']
            ],
        ]
    },
    '104': {
    'name': 'Prof. Doutor Manuel Sobrinho Simões',
    'location': 'PORTO',
    'sessions':[
            [
                ['CONFERÊNCIA'],
                ["Quinta, 27"],
                ['ALIMENTAÇÃO E CANCRO'],
                ['#Q27']
            ],
        ]
    },
    '105':{
    'name': 'Prof. Doutor Mário Mascarenhas',
    'location': 'LISBOA',
    'sessions':[
            [
                ['CONFERÊNCIA'],
                ["Quarta, 26"],
                ['REFLEXO INFLAMATÓRIO NA DIABETES E NO RISCO CARDIOVASCULAR'],
                ['#Q26']
            ],
        ]
    },
    '106':{
    'name': 'Prof. Doutor Michael B. Zimmermann',
    'location': 'ZURIQUE',
    'sessions':[
            [
                ['CONFERÊNCIA'],
                ["Quarta, 26"],
                ['A PROBLEMÁTICA DA IODO-DEFICIÊNCIA'],
                ['#Q26']
            ],
        ]
    },
    '107':{
      'name': 'Prof. Doutor Miguel Melo',
    'location': 'COIMBRA',
    'sessions':[
            [
                ['CONFERÊNCIA'],
                ["Terça, 25"],
                ['DIABETES E CANCRO'],
                ['#T25']
            ],
        ]
    },
    '108':{
       'name': 'Prof. Doutor Pedro Marques',
    'location': 'LISBOA',
    'sessions':[
            [
                ['Sessão 11'],
                ["Sexta, 28"],
                ['INCIDENTALOMAS DA HIPÓFISE – ABORDAGEM INICIAL'],
                ['28/28-2-Sessao11/detail/']
            ],
        ]
    },
    '109': {
        'name': 'Prof. Doutor Silva Nunes',
        'location': 'LISBOA',
        'sessions':[
            [
                ['Sessão 6'],
                ["Quarta, 26"],
                ['Dislipidemia e Doenças Raras - Sindroma de Quilomicronémia Familiar'],
                ['26/26-3-Sessao6/detail/']
            ],
        ]
    },
    '110': {
        'name': 'Prof. Doutor Valeriano Leite',
        'location': 'LISBOA',
        'sessions':[
            [
                ['Sessão 9'],
                ["Quinta, 27"],
                ['Tiroideia – Patologia Nodular'],
                ['27/27-1-Sessao9/detail/']
            ],
        ]
    },
    '111': {
        'name': 'Profª. Doutora Alexandra Bento',
        'location': 'PORTO',
        'sessions':[
            [
                ['IX Simpósio Satélite'],
                ["Quinta, 27"],
                ['SIMPÓSIO DE NUTRIÇÃO'],
                ['27/27-8-SimposiumSateliteNutricao/detail/']
            ],
        ]
    },
    '112': {
        'name': 'Profª. Doutora  Ana Paula Barbosa',
        'location': 'LISBOA',
        'sessions':[
            [
                ['Sessão 8'],
                ["Quarta, 26"],
                ['Tiroideia e o Iodo'],
                ['26/26-11-Sessao8/detail/']
            ],
        ]
    },
    '113': {
        'name': 'Profª. Doutora Conceição Calhau',
        'location': 'LISBOA',
        'sessions':[
            [
                ['Sessão 8'],
                ["Quarta, 26"],
                ['IODO – O PAPEL DA ALIMENTAÇÃO'],
                ['26/26-11-Sessao8/detail/']
            ],
        ]
    },
    '114': {
        'name': 'Profª. Doutora Flora Correia',
        'location': 'PORTO',
        'sessions':[
            [
                ['Sessão 10'],
                ['Quinta, 27'],
                ['DESNUTRIÇÃO HOSPITALAR E CUSTOS ECONÓMICOS'],
                ['27/27-4-Sessao10/detail/']
            ],
             [
                ['DISCUSSÃO DE POSTERS'],
                ["Sexta, 28"],
                ['DISCUSSÃO DE POSTERS'],
                ['#S28'],
            ]
        ]
    },
    '115': {
        'name': 'Profª. Doutora Helena Cardoso',
        'location': 'PORTO',
        'sessions':[
            [
                ['Sessão 12'],
                ['Sexta, 28'],
                ['Endocrinologia da Reprodução'],
                ['28/28-3-Sessao12/detail/']
            ],
            [
                ['CONFERÊNCIA'],
                ["Sexta, 28"],
                ['DETERMINANTES SOCIAIS DA SAÚDE?'],
                ['#S28']
            ],

        ]
    },
    '116': {
        'name': 'Profª. Doutora Maria Joao Bugalho',
        'location': 'LISBOA',
        'sessions': [
            [
                ['Sessão 11'],
                ["Sexta, 28"],
                ['Patologia Hipofisária'],
                ['28/28-2-Sessao11/detail/']
            ]
        ]
    },
    '117': {
        'name': 'Profª. Doutora Paula Freitas',
        'location': 'PORTO',
        'sessions': [
            [
                ['Sessão 3'],
                ['Terça, 25'],
                ['ABORDAGEM DA ESTEATOSE HEPáTICA'],
                ['25/25-4-Sessao3/detail/']
            ]
        ]
    },
    '118': {
       'name': 'Profª. Doutora Sónia do Vale',
       'location': 'LISBOA',
       'sessions': [
           [
               ['Sessão 2'],
               ['Terça, 25'],
               ['Diabetes - Diagnóstico e Monitorização'],
               ['25/25-2-1-Sessao2/detail/']
           ]
       ]
    },
    '119': {
        'name': 'Luis Dias',
        'location': 'PONTA DELGADA',
        'sessions':[
            [
                ['Sessão 2'],
                ["Terça, 25"],
                ['Diabetes - Diagnóstico e Monitorização'],
                ['25/25-2-1-Sessao2/detail/']],
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