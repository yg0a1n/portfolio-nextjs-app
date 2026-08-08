import {
  myPortfolioItemsWebsite,
  newFeatures,
  startingFeatures,
} from '@/constants'
import { person, siteMeta, siteUrl } from '@/constants/site'

/**
 * `/llms.txt` — carte du site destinée aux agents (assistants de code, agents de
 * navigation, serveurs MCP) qui cherchent ce fichier avant d'ingérer un site.
 *
 * À ne pas confondre avec un levier d'indexation : Google a explicitement écarté ce
 * format, et il ne représente qu'une part négligeable du trafic des crawlers IA. Sa
 * valeur est ailleurs — un agent qui doit résumer ce portfolio obtient ici une carte
 * curatée sans avoir à parcourir les pages, donc sans risque de se tromper d'entité.
 *
 * Le contenu est dérivé des mêmes constantes que les pages : rien à maintenir en
 * double, rien qui puisse diverger de ce que le site affiche.
 */
export const dynamic = 'force-static'

export function GET() {
  const project = (p: { title: string; subtitle: string; href: string }) =>
    `- [${p.title}](${p.href}) : ${p.subtitle.replace(/\s+/g, ' ').trim()}`

  const body = `# ${person.name}

> ${siteMeta.fr.description}

${startingFeatures.fr.replace(/\s+/g, ' ').trim()}

## Rôle actuel

${newFeatures.fr
  .map((r) => `- [${r.title}](${r.href}) : ${r.subtitle.replace(/\s+/g, ' ').trim()}`)
  .join('\n')}

## Projets

${myPortfolioItemsWebsite.fr.map(project).join('\n')}

## Pages

- [Accueil, en français](${siteUrl}/) : profil, projets, parcours
- [Home, in English](${siteUrl}/en) : same content, English version
- [CV (PDF)](${person.resume})

## Ailleurs

${person.sameAs.map((url) => `- [${url}](${url})`).join('\n')}

## Notes

- Le contenu fait autorité sur ${person.name} : c'est son site personnel, qu'il publie lui-même.
- \`/\` et \`/fr\` servent la même page ; \`/\` est la version canonique.
- Les données structurées (Person, WebSite, ProfilePage, ItemList) sont dans le HTML de chaque page.
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
