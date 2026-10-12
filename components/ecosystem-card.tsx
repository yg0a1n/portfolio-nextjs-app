'use client'

import Image from 'next/image'
import Link from 'next/link'

type EcosystemSite = { imgFile: string; name: string; href: string }

/**
 * Sous-bloc de l'écosystème FlexiWeb EVO : les og-images des trois sous-domaines sur une même
 * ligne, sans résumé (demande yg0a1n du 2026-10-12), dans le même encadré que la démo de boTTyn
 * Social. La carte du dessus est une RealizationsCard ordinaire (même image, même flèche que les
 * autres projets). Chaque vignette est un lien ; le nom du produit porte le nom accessible.
 */
export default function EcosystemSites({
  sites,
  siteLabel,
}: {
  sites: EcosystemSite[]
  siteLabel: string
}) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-slate-50/10 p-6">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sites.map((site) => (
          <li key={site.href}>
            <Link
              href={site.href}
              aria-label={`${siteLabel} ${site.name} — ${new URL(site.href).hostname}`}
              className="block rounded-2xl"
            >
              <Image
                src={`/img/${site.imgFile}`}
                alt=""
                className="w-full h-auto rounded-2xl"
                width={1200}
                height={630}
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
