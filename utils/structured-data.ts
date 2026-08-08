import { myPortfolioItemsWebsite, startingFeatures } from '@/constants'
import {
  canonicalPath,
  ogImage,
  person,
  siteMeta,
  siteUrl,
} from '@/constants/site'

type Lang = 'fr' | 'en'

/**
 * Graphe JSON-LD de la page d'accueil : la personne (entité principale), la page de
 * profil qui la porte, le site, et la liste des projets.
 *
 * Rendu dans le HTML serveur — un JSON-LD injecté côté client subit un traitement
 * retardé par les moteurs et peut n'être jamais lu.
 */
export function buildStructuredData(lang: Lang) {
  const meta = siteMeta[lang]
  const pageUrl = `${siteUrl}${canonicalPath[lang]}`
  const personId = `${siteUrl}/#person`
  const websiteId = `${siteUrl}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: person.name,
        givenName: person.givenName,
        familyName: person.familyName,
        url: pageUrl,
        image: person.image,
        jobTitle: meta.jobTitle,
        description: startingFeatures[lang],
        knowsAbout: meta.knowsAbout,
        worksFor: {
          '@type': 'Organization',
          name: person.worksFor.name,
          url: person.worksFor.url,
        },
        sameAs: person.sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${siteUrl}/`,
        name: meta.title,
        description: meta.description,
        inLanguage: lang,
        about: { '@id': personId },
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profilepage`,
        url: pageUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: lang,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#projects`,
        name: meta.projectsHeading,
        itemListOrder: 'https://schema.org/ItemListOrderDescending',
        numberOfItems: myPortfolioItemsWebsite[lang].length,
        itemListElement: myPortfolioItemsWebsite[lang].map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.subtitle,
            url: project.href,
            image: `${siteUrl}/img/${project.imgFile}`,
            creator: { '@id': personId },
            keywords: project.tags.join(', '),
          },
        })),
      },
    ],
  }
}
