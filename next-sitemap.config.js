// Le slash final est retiré : la valeur définie en Production en porte un, ce qui
// produisait une entrée `Sitemap:` à double slash.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
).replace(/\/+$/, '')

/**
 * Les crawlers IA sont autorisés nommément. Sans règle à leur nom ils héritent de `*`,
 * mais l'autorisation explicite lève l'ambiguïté et documente l'intention.
 *
 * Deux distinctions utiles : Google-Extended ne concerne que l'entraînement de Gemini
 * (l'indexation Google Search et les AI Overviews passent par Googlebot), et GPTBot
 * (entraînement) est distinct de ChatGPT-User / OAI-SearchBot (navigation et citation
 * en temps réel).
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
]

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  // `/fr` sert la même page que `/` et son canonical renvoie vers `/` : l'y lister
  // contredirait ce canonical, alors qu'un sitemap n'annonce que des canoniques.
  // `/llms.txt` n'est pas une page mais une ressource pour agents ; elle se découvre
  // par son chemin conventionnel, pas par l'index des pages à explorer.
  exclude: ['/fr', '/llms.txt'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
  },
}
