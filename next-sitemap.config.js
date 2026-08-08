const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

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
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
}
