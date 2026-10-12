export const navbarContent = {
  fr: {
    repoBadge: 'Voir le repo',
  },
  en: {
    repoBadge: 'View repo',
  },
}

export const getStartedContent = {
  fr: {
    typingText: '| Que fais-je?',
    title: 'Quelle est la vision qui accompagne mon rôle ?',
    linkText: 'Resumé',
  },
  en: {
    typingText: '| What do I do?',
    title: 'What is the vision that accompanies my role?',
    linkText: 'Resume',
  },
}

export const startingFeatures = {
  fr: 'Je développe des applications Web TypeScript innovantes avec Next.js et Encore-js, intégrant APIs, bases de données et microservices.',

  en: 'I develop innovative TypeScript web applications with Next.js and Encore-js, integrating APIs, databases and microservices.',
}

export const aboutMeContent = {
  fr: {
    typingText: '| Qui suis-je?',
    title: 'Je suis développeur Full Stack',
    beforeText: 'En tant que',
    boldText: ' développeur Full Stack ',
    content: `, mon métier est de transformer un besoin métier en solution
      numérique — l'IA n'intervient que lorsqu'elle apporte une valeur
      mesurable. Je suis à l'aise quand le besoin est encore flou et qu'il faut
      le rendre concret. La qualité d'une solution tient à la compréhension du
      terrain : je travaille aux côtés des experts métier, convaincu que
      plusieurs expertises construisent mieux qu'une seule.`,
  },
  en: {
    typingText: '| Who am I?',
    title: 'I am a Full-Stack developer',
    beforeText: 'As a',
    boldText: ' Full-Stack developer ',
    content: `, my craft is turning a business need into a digital solution —
      AI only steps in when it brings measurable value. I'm at my best when the
      need is still fuzzy and has to be made concrete. A solution's quality
      comes from understanding the field: I work alongside domain experts,
      convinced that several kinds of expertise build better than one.`,
  },
}

export const myPortfolioItems = {
  fr: {
    typingText: '| Mes travaux sélectionnés',
    title: 'Quelques unes de mes créations',
  },
  en: {
    typingText: '| My selected works',
    title: 'Some of my creations',
  },
}

export const myPortfolioItemsWebsite = {
  fr: [
    {
      imgFile: 'bottyn-social.png',
      title: 'boTTyn Social',
      subtitle:
        'boTTyn Social organise votre identité numérique et vos relations pour être trouvé facilement par les bonnes personnes, au bon moment.',
      demoText:
        'Chaque jour, quelqu’un vous cherche et ne vous trouve pas. boTTyn y répond, sur mobile comme sur le web : une présence en ligne vraie et crédible qui vous rend visible et reconnu pour ce que vous êtes.',
      href: 'https://www.bottyn.fr/',
      tags: ['nextjs', 'tailwind', 'encore-js'],
    },
    {
      imgFile: 'nextjs-starter-ui-kit_900w675h.png',
      title: 'Kit de démarrage Next.js',
      subtitle:
        'Starter Next.js 15 avec Tailwind CSS et shadcn/ui, intègre Docker et GitHub Actions pour un déploiement CI/CD automatisé sur Fly.io.',
      href: 'https://starter-nextjs-ui-kit.vercel.app/',
      tags: [
        'nextjs15',
        'tailwindcss',
        'shadcn-ui',
        'docker',
        'cookies-consent',
        'cicd',
        'flyio',
      ],
    },
    {
      imgFile: 'couleurpartage_900w675h.png',
      title: 'Couleur et partage',
      subtitle:
        'Création d’une page web simple pour une entrepreneuse indépendante en peinture basée au Québec, dédiée à sa communication professionnelle.',
      href: 'https://www.couleurpartage.xyz/fr',
      tags: ['nextjs', 'tailwind', 'sendgrid'],
    },
    {
      imgFile: 'markdown_qa_demo_900wx675h.png',
      title: 'Markdown QA',
      subtitle:
        'Conception d’un outil de gestion des priorités permettant le suivi, la classification et la résolution des erreurs issues des journaux des serveurs backend.',
      href: 'https://nextjs-markdown-qa.vercel.app/',
      tags: ['nextjs', 'mdx'],
    },
  ],
  en: [
    {
      imgFile: 'bottyn-social.png',
      title: 'boTTyn Social',
      subtitle:
        'boTTyn Social organizes your digital identity and relationships so you can be easily found by the right people at the right time.',
      demoText:
        'Every day, someone is looking for you and can’t find you. boTTyn answers that, on mobile and on the web: a genuine, credible online presence that makes you visible and recognized for who you really are.',
      href: 'https://www.bottyn.fr/',
      tags: ['nextjs', 'tailwind', 'encore-js'],
    },
    {
      imgFile: 'nextjs-starter-ui-kit_900w675h.png',
      title: 'Next.js 15 Starter Kit',
      subtitle:
        'Next.js 15 starter with Tailwind CSS and shadcn/ui, includes Docker and GitHub Actions for automated CI/CD deployment on Fly.io.',
      href: 'https://starter-nextjs-ui-kit.vercel.app/',
      tags: [
        'nextjs15',
        'tailwindcss',
        'shadcn-ui',
        'docker',
        'github-actions',
        'cicd',
        'flyio',
      ],
    },
    {
      imgFile: 'couleurpartage_900w675h.png',
      title: 'Couleur et partage',
      subtitle:
        'Creation of a simple web page for a self-employed painter based in Quebec, dedicated to her professional communication.',
      href: 'https://www.couleurpartage.xyz/fr',
      tags: ['nextjs', 'tailwind', 'sendgrid'],
    },
    {
      imgFile: 'markdown_qa_demo_900wx675h.png',
      title: 'Markdown QA',
      subtitle:
        'Design of a priority management tool for tracking, classifying, and resolving errors from backend server logs.',
      href: 'https://nextjs-markdown-qa.vercel.app/',
      tags: ['nextjs', 'mdx'],
    },
  ],
}

// Écosystème FlexiWeb EVO, affiché avant boTTyn Social. Images = captures du hero de chaque site au
// 2026-10-12 (data, diag, b2b, ass : leurs og-images publiées ; www : la même capture que son og-image-v2,
// aussi 5ᵉ vignette du carrousel à la place de form, demande yg0a1n du 2026-10-12) : à refaire sous un NOUVEAU nom si un hero change, le cache
// d'images garderait sinon l'ancienne capture.
const ecosystemSites = [
  {
    imgFile: 'ecosysteme/flexiweb-evo-data.png',
    name: 'Catalogue Intelligent',
    href: 'https://data.flexiweb-evo.eu/',
  },
  {
    imgFile: 'ecosysteme/flexiweb-evo-diag.png',
    name: 'Diagnostic IA',
    href: 'https://diag.flexiweb-evo.eu/',
  },
  {
    imgFile: 'ecosysteme/flexiweb-evo-b2b.png',
    name: 'Site Express',
    href: 'https://b2b.flexiweb-evo.eu/',
  },
  {
    imgFile: 'ecosysteme/flexiweb-evo-ass.png',
    name: 'Assistant Terrain',
    href: 'https://ass.flexiweb-evo.eu/',
  },
  {
    imgFile: 'ecosysteme/flexiweb-evo-www.png',
    name: 'FlexiWeb EVO',
    href: 'https://www.flexiweb-evo.eu/',
  },
]

export const flexiwebEcosystem = {
  fr: {
    imgFile: 'ecosysteme/flexiweb-evo-www.png',
    title: 'Écosystème FlexiWeb EVO',
    subtitle:
      'Mon activité de développeur indépendant à Toulon : des produits web et IA pour les TPE et PME, chacun sur son sous-domaine.',
    href: 'https://www.flexiweb-evo.eu/',
    tags: ['nextjs', 'tailwind', 'vercel', 'github-actions'],
    sites: ecosystemSites,
    siteLabel: 'Ouvrir',
    pauseLabel: 'Pause',
    playLabel: 'Lecture',
  },
  en: {
    imgFile: 'ecosysteme/flexiweb-evo-www.png',
    title: 'FlexiWeb EVO ecosystem',
    subtitle:
      'My independent developer business in Toulon: web and AI products for small businesses, each on its own subdomain.',
    href: 'https://www.flexiweb-evo.eu/en',
    tags: ['nextjs', 'tailwind', 'vercel', 'github-actions'],
    sites: ecosystemSites,
    siteLabel: 'Open',
    pauseLabel: 'Pause',
    playLabel: 'Play',
  },
}

export const myPortfolioItemsWeb3 = {
  fr: {
    typingText: '| Mes travaux récents',
    title: `Mes réalisations en entreprise`,
  },
  en: {
    typingText: '| My recent works',
    title: 'My business achievements',
  },
}

export const web3ProExperiences = {
  fr: [
    {
      imgFile: 'feature-logo_100w.png',
      title: 'FEATURE',
      subtitle:
        'Startup Web3 conçue pour valoriser le travail des développeurs via une approche innovante de rémunération, en mobilisant diverses compétences techniques.',
      href: 'https://dashboard.feature.sh/',
    },
    {
      imgFile: 'avatar-n1c0.jpeg',
      title: 'Nicolas Wagner',
      subtitle: 'Le CEO, fondateur de FEATURE et developer web/web3 senior.',
      href: 'https://github.com/n1c01a5',
    },
  ],
  en: [
    {
      imgFile: 'feature-logo_100w.png',
      title: 'FEATURE',
      subtitle:
        'Web3 startup designed to promote the work of developers through an innovative compensation approach, mobilizing various technical skills.',
      href: 'https://dashboard.feature.sh/',
    },
    {
      imgFile: 'avatar-n1c0.jpeg',
      title: 'Nicolas Wagner',
      subtitle: 'The CEO, founder of FEATURE and senior web/web3 developer.',
      href: 'https://github.com/n1c01a5',
    },
  ],
}

export const web3ProCards = {
  fr: [
    {
      name: '',
      description: '',
      imgFile: 'startme_capture.png',
      logo_link: '',
      logo_img: '',
      source_img_link: '',
      collection: 'web3',
    },
    {
      name: 'Dapp',
      description:
        "La Dapp centralise toutes les transactions initiées à partir d'une issue Github, incluant les transactions, les réclamations, les défis, les paiements, les remboursements, etc.",
      imgFile: 'dapp_claim_capture.png',
      logo_link: 'https://evm.app.feature.sh/',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://evm.app.feature.sh/',
      collection: 'web3',
    },
    {
      name: 'Dashboard',
      description:
        "Le Dashboard offre un accès aux portefeuilles, permet de fixer la rémunération en tokens, d'émettre de nouveaux tokens et de configurer un arbitrage.",
      imgFile: 'dashboard_capture.png',
      logo_link: 'https://dashboard.feature.sh/',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://dashboard.feature.sh/',
      collection: 'web3',
    },
    {
      name: 'Jobsboard',
      description:
        'Le JobsBoard répertorie toutes les issues en cours, accompagnées de leurs étiquettes, et permet de calculer les montants des tokens par organisations Github.',
      imgFile: 'jobsboard_capture.png',
      logo_link: 'https://jobs.feature.sh/jobs/',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://jobs.feature.sh/jobs/',
      collection: 'web3',
    },
    {
      name: '_mastercode',
      description:
        'Plateforme de formation en ligne de développement Web / Blockchain / IA, pour les développeurs débutants aux plus avancés.',
      imgFile: 'mastercode-home-page.png',
      logo_link: 'https://mastercode.cc/fr',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://mastercode.cc/fr',
      collection: 'web3',
    },
  ],
  en: [
    {
      name: '',
      description: '',
      imgFile: 'startme_capture.png',
      logo_link: '',
      logo_img: '',
      source_img_link: '',
      collection: 'web3',
    },
    {
      name: 'Dapp',
      description:
        'The Dapp centralizes all transactions initiated from a Github issue, including transactions, complaints, challenges, payments, refunds, etc.',
      imgFile: 'dapp_claim_capture.png',
      logo_link: 'https://evm.app.feature.sh/',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://evm.app.feature.sh/',
      collection: 'web3',
    },
    {
      name: 'Dashboard',
      description:
        "Le Dashboard offre un accès aux portefeuilles, permet de fixer la rémunération en tokens, d'émettre de nouveaux tokens et de configurer un arbitrage.",
      imgFile: 'dashboard_capture.png',
      logo_link: 'https://dashboard.feature.sh/',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://dashboard.feature.sh/',
      collection: 'web3',
    },
    {
      name: 'Jobsboard',
      description:
        'The JobsBoard lists all current issues, along with their labels, and allows you to calculate token amounts by Github organizations.',
      imgFile: 'jobsboard_capture.png',
      logo_link: 'https://jobs.feature.sh/jobs/',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://jobs.feature.sh/jobs/',
      collection: 'web3',
    },
    {
      name: '_mastercode',
      description:
        'Online Web/Blockchain/AI development training platform, for beginners to more advanced developers.',
      imgFile: 'mastercode-home-page.png',
      logo_link: 'https://mastercode.cc/en',
      logo_img: 'feature-logo_100w.png',
      source_img_link: 'https://mastercode.cc/en',
      collection: 'web3',
    },
  ],
}

export const newFeaturesContent = {
  fr: {
    typingText: '| Mon rôle actuel',
    title: 'Ce que je fais aujourd’hui',
  },
  en: {
    typingText: '| My current role',
    title: 'What I do today',
  },
}

export const newFeatures = {
  fr: [
    {
      imgFile: 'flexiweb-evo-logo-192.png',
      title: 'Fondateur de FlexiWeb EVO · Développeur produits web & IA',
      subtitle:
        'Je conçois, développe et mets en ligne seul les produits de l’écosystème, pour les TPE et PME. L’IA exécute, je vérifie et je valide chaque livraison.',
      href: 'https://www.flexiweb-evo.eu/',
    },
  ],
  en: [
    {
      imgFile: 'flexiweb-evo-logo-192.png',
      title: 'Founder of FlexiWeb EVO · Web & AI products developer',
      subtitle:
        'I design, build and ship the ecosystem’s products on my own, for small businesses. AI does the work, I check and approve every release.',
      href: 'https://www.flexiweb-evo.eu/',
    },
  ],
}

export const newFeatureCards = {
  fr: [
    {
      name: '',
      description: '',
      imgFile: 'flexiweb-evo-about.png',
      logo_link: '',
      logo_img: '',
      source_img_link: 'https://www.flexiweb-evo.eu/about',
      collection: 'news',
    },
  ],
  en: [
    {
      name: '',
      description: '',
      imgFile: 'flexiweb-evo-about.png',
      logo_link: '',
      logo_img: '',
      source_img_link: 'https://www.flexiweb-evo.eu/en/about',
      collection: 'news',
    },
  ],
}

export const tasks = {
  fr: {
    typingText: '| Mes tâches',
    title: 'Quelles sont mes différentes tâches effectuées?',
    content:
      'Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers des référentiels de code et des démonstrations en direct. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.',
  },

  en: {
    typingText: '| My tasks',
    title: 'What are my various tasks performed?',
    content:
      'The following projects showcase my skills and experience through concrete examples of my work. Each project is briefly described with links to code repositories and live demonstrations. This reflects my ability to solve complex problems, work with different technologies and manage projects effectively.',
  },
}

export const tasksCards = {
  fr: [
    {
      name: 'Lucid Diagram',
      description:
        "Schéma des fonctionnalités d'un contrat intelligent avec Lucid.",
      imgFile: 'lucid_feature_smarts_contracts_diagram.png',
      logo_link: 'https://www.lucidchart.com/',
      logo_img: 'lucid-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'Errors logs',
      description: "Journaux d'erreurs des backends avec Next.js.",
      imgFile: 'feature_lists_errors.png',
      logo_link: 'https://nextjs.org/',
      logo_img: 'react-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'n8n workflow',
      description: 'Sauvegarde des workflows n8n dans Github.',
      imgFile: 'n8n_backup_github.png',
      logo_link: 'https://n8n.io/',
      logo_img: 'n8n-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'Backend uptime status',
      description: 'État des disponibilités des frontaux et du backend.',
      imgFile: 'feature_status_bot.png',
      logo_link: 'https://uptimerobot.com/',
      logo_img: 'uptime-robot-logo.png',
      source_img_link: 'https://status.feature.sh/',
      collection: 'tasks',
    },
    {
      name: 'Subgraph of The Graph',
      description: "Sous-graphe d'un contrat intelligent avec The Graph.",
      imgFile: 'graphql_screenshoot_feature.png',
      logo_link: 'https://thegraph.com/',
      logo_img: 'the-graph-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'Dune Analytics',
      description: "Vue d'un dashboard Dune Analytics de contrat intelligents.",
      imgFile: 'dune_analytics_screenshoot_feature.png',
      logo_link: 'https://dune.com/',
      logo_img: 'dune-logo.svg',
      source_img_link:
        'https://dune.com/blockchaindevweb/feature-gnosis-chain-xdai-usage',
      collection: 'tasks',
    },
  ],
  en: [
    {
      name: 'Lucid Diagram',
      description:
        'Diagram of the functionalities of a smart contract with Lucid.',
      imgFile: 'lucid_feature_smarts_contracts_diagram.png',
      logo_link: 'https://www.lucidchart.com/',
      logo_img: 'lucid-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'Errors logs',
      description: 'Backends errors logs with Next.js.',
      imgFile: 'feature_lists_errors.png',
      logo_link: 'https://nextjs.org/',
      logo_img: 'react-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'n8n workflow',
      description: 'n8n workflows backup in Github.',
      imgFile: 'n8n_backup_github.png',
      logo_link: 'https://n8n.io/',
      logo_img: 'n8n-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'Backend uptime',
      description: 'Front-end and backend availability status',
      imgFile: 'feature_status_bot.png',
      logo_link: 'https://uptimerobot.com/',
      logo_img: 'uptime-robot-logo.png',
      source_img_link: 'https://status.feature.sh/',
      collection: 'tasks',
    },
    {
      name: 'Subgraph of The Graph',
      description: 'Subgraph of a smart contract with The Graph.',
      imgFile: 'graphql_screenshoot_feature.png',
      logo_link: 'https://thegraph.com/',
      logo_img: 'the-graph-logo.png',
      source_img_link: '',
      collection: 'tasks',
    },
    {
      name: 'Dune Analytics',
      description: 'View of a Dune Analytics dashboard of smart contracts.',
      imgFile: 'dune_analytics_screenshoot_feature.png',
      logo_link: 'https://dune.com/',
      logo_img: 'dune-logo.svg',
      source_img_link:
        'https://dune.com/blockchaindevweb/feature-gnosis-chain-xdai-usage',
      collection: 'tasks',
    },
  ],
}

export const worldsContents = {
  fr: {
    typingText: '| Avancés dans le monde',
    title: 'Les avancées technologiques qui ont propulsé mes réalisations',
  },
  en: {
    typingText: '| Advanced in the world',
    title: 'The technological advances that have propelled my achievements',
  },
}

export const feedbacksContents = {
  fr: {
    title: 'Yannick',
    subtitle: 'Mon parcours',
    content: `“Souvent très qualifié dans mes fonctions, je suis resté au fil des années un autodidacte passionné, avec une forte appétence pour les nouvelles technologies. Ce parcours retrace mon évolution — un carnet de bord, qui reflète également une partie de mon chemin personnel.”`,
  },
  en: {
    title: 'Yannick',
    subtitle: 'My journey',
    content: `“While often highly qualified in my roles, I have remained over the years a passionate self-taught individual with a strong affinity for new technologies. This account traces my evolution—a logbook that also reflects a part of my personal journey.”`,
  },
}

export const footerContents = {
  fr: {
    copyright: '© 2026 Portfolio. Tous droits réservés.',
  },
  en: {
    copyright: '© 2026 Portfolio. All rights reserved.',
  },
}
