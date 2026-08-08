/**
 * Identité du site et données d'entité, source unique pour les metadata et le JSON-LD.
 *
 * Les URLs du JSON-LD, les canonical et le sitemap sont absolues et repartent toutes
 * d'ici. NEXT_PUBLIC_SITE_URL est défini côté Production ; le fallback vise le domaine
 * de prod plutôt que localhost, pour qu'une variable manquante dégrade en URLs justes
 * au lieu de publier un graphe pointant vers localhost. En développement, le `.env`
 * définit la variable sur localhost et reste prioritaire.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://portfolio-nextjs-app-gamma.vercel.app'

export const person = {
  name: 'Yannick Goalen',
  givenName: 'Yannick',
  familyName: 'Goalen',
  image: `${siteUrl}/img/photo-linkedin.jpeg`,
  resume: 'https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf',
  sameAs: ['https://www.linkedin.com/in/y-goalen/', 'https://github.com/yg0a1n'],
  worksFor: {
    name: 'FlexiWeb EVO',
    url: 'https://www.flexiweb-evo.eu/',
  },
}

export const ogImage = {
  url: `${siteUrl}/img/og-image-900x1428.png`,
  width: 1428,
  height: 902,
}

export const siteMeta = {
  fr: {
    locale: 'fr_FR',
    title: 'Yannick Goalen — Développeur Full Stack, produits SaaS & IA',
    description:
      "Développeur Full Stack, je conçois avec FlexiWeb EVO des produits SaaS et des solutions IA pour les TPE/PME, de l'idée au déploiement. Projets et parcours.",
    heading: 'Yannick Goalen — développeur Full Stack, produits SaaS & IA',
    jobTitle: 'Développeur Produits SaaS & IA',
    projectsHeading: 'Projets de Yannick Goalen',
    knowsAbout: [
      'Développement Full Stack',
      'TypeScript',
      'Next.js',
      'Encore.ts',
      'Produits SaaS',
      "Intégration d'intelligence artificielle",
      'Conception de solutions métier',
    ],
  },
  en: {
    locale: 'en_US',
    title: 'Yannick Goalen — Full-Stack Developer, SaaS & AI Products',
    description:
      'Full-Stack developer, I build SaaS products and AI solutions for small businesses with FlexiWeb EVO, from idea to deployment. Selected projects and journey.',
    heading: 'Yannick Goalen — Full-Stack developer, SaaS & AI products',
    jobTitle: 'SaaS & AI Products Developer',
    projectsHeading: 'Projects by Yannick Goalen',
    knowsAbout: [
      'Full-Stack development',
      'TypeScript',
      'Next.js',
      'Encore.ts',
      'SaaS products',
      'Artificial intelligence integration',
      'Business solution design',
    ],
  },
}

/**
 * `/` sert le français ; `/fr` en est un doublon et pointe donc vers `/` en canonical.
 */
export const canonicalPath = { fr: '/', en: '/en' }

export const languageAlternates = {
  fr: `${siteUrl}/`,
  en: `${siteUrl}/en`,
  'x-default': `${siteUrl}/`,
}
