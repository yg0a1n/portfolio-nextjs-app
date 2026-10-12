'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import { fadeIn } from '@/utils/motion'

type EcosystemSite = { imgFile: string; name: string; href: string }

/**
 * Écosystème FlexiWeb EVO : l'og-image de www à gauche avec son résumé à droite, puis les
 * og-images des trois sous-domaines sur une même ligne, sans résumé (demande yg0a1n du
 * 2026-10-12). Chaque image est un lien vers son site ; le nom du produit porte le nom
 * accessible, puisqu'aucun texte n'est affiché sous les trois vignettes.
 */
export default function EcosystemCard({
  imgFile,
  title,
  summary,
  href,
  tags,
  sites,
  siteLabel,
}: {
  imgFile: string
  title: string
  summary: string
  href: string
  tags: string[]
  sites: EcosystemSite[]
  siteLabel: string
}) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0, 1)}
      className="flex flex-col gap-6 rounded-3xl border border-black/10 dark:border-slate-50/10 p-6"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <Link href={href} className="md:w-1/2 shrink-0">
          <Image
            src={`/img/${imgFile}`}
            alt={`${title} — www.flexiweb-evo.eu`}
            className="w-full h-auto rounded-2xl"
            width={1200}
            height={630}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </Link>
        <div className="flex flex-col">
          <h4 className="font-normal lg:text-[42px] text-[26px]">{title}</h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <p key={`ecosystem-${tag}`} className="text-[14px]">
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </div>

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
    </motion.div>
  )
}
