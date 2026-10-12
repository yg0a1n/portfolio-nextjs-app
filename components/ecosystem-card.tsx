'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

type EcosystemSite = { imgFile: string; name: string; href: string }

const VISIBLE = 3
const STEP_MS = 2000
const SLIDE_MS = 600
const GAP_PX = 16

/**
 * Sous-bloc de l'écosystème FlexiWeb EVO, dans le même encadré que la démo de boTTyn Social :
 * carrousel des og-images des sous-domaines, sans résumé (demande yg0a1n du 2026-10-12). Trois
 * vignettes visibles, décalage d'une vignette vers la gauche toutes les 2 s, en boucle.
 *
 * Boucle sans saut visible : les VISIBLE premières vignettes sont recopiées en fin de piste ;
 * arrivé sur la première copie, on revient à 0 sans transition. Les copies sont masquées aux
 * lecteurs d'écran et hors tabulation.
 *
 * WCAG 2.2.2 (contenu qui bouge plus de 5 s) : bouton pause/lecture, arrêt au survol et au
 * focus, et arrêt d'office si l'utilisateur a demandé moins d'animations. Une vignette qui prend
 * le focus est ramenée dans la partie visible.
 */
export default function EcosystemSites({
  sites,
  siteLabel,
  pauseLabel,
  playLabel,
}: {
  sites: EcosystemSite[]
  siteLabel: string
  pauseLabel: string
  playLabel: string
}) {
  const track = [...sites, ...sites.slice(0, VISIBLE)]
  const [pos, setPos] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [hold, setHold] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true)
      setPaused(true)
    }
  }, [])

  useEffect(() => {
    if (paused || hold) return
    const id = window.setInterval(() => {
      setAnimate(true)
      setPos((p) => p + 1)
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [paused, hold])

  // Arrivé sur la copie de la 1re vignette : retour à 0 sans transition, invisible à l'œil.
  useEffect(() => {
    if (pos < sites.length) return
    const id = window.setTimeout(() => {
      setAnimate(false)
      setPos(0)
    }, SLIDE_MS)
    return () => window.clearTimeout(id)
  }, [pos, sites.length])

  return (
    <div className="rounded-3xl border border-black/10 dark:border-slate-50/10 p-6">
      <div
        className="overflow-hidden"
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHold(false)
        }}
      >
        <ul
          className="flex"
          style={{
            gap: `${GAP_PX}px`,
            transform: `translateX(calc(-${pos} * (100% + ${GAP_PX}px) / ${VISIBLE}))`,
            transition: animate ? `transform ${SLIDE_MS}ms ease-in-out` : 'none',
          }}
        >
          {track.map((site, i) => {
            const isCopy = i >= sites.length
            return (
              <li
                key={`${site.href}-${i}`}
                aria-hidden={isCopy || undefined}
                className="shrink-0"
                style={{ flexBasis: `calc((100% - ${(VISIBLE - 1) * GAP_PX}px) / ${VISIBLE})` }}
              >
                <Link
                  href={site.href}
                  tabIndex={isCopy ? -1 : undefined}
                  aria-label={`${siteLabel} ${site.name} — ${new URL(site.href).hostname}`}
                  // Anneau de focus INTÉRIEUR : l'overflow-hidden du carrousel rognait un anneau extérieur
                  // Bicolore (trait blanc bordé de noir) : ≥ 3:1 sur n'importe quelle capture (gate #2417, #2419).
                  className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white focus-visible:shadow-[inset_0_0_0_5px_#0a0a0a]"
                  onFocus={() => {
                    setAnimate(!reduceMotion)
                    setPos(Math.max(0, i - (VISIBLE - 1)))
                  }}
                >
                  <Image
                    src={`/img/${site.imgFile}`}
                    alt=""
                    className="w-full h-auto rounded-2xl"
                    width={1200}
                    height={630}
                    sizes="33vw"
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-4 flex justify-end">
        {/* Libellé qui change, sans aria-pressed (sinon « Lecture, enfoncé ») ; glyphes hors du nom accessible. */}
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="rounded-full border border-black/20 dark:border-slate-50/30 px-4 py-1 text-[14px]"
        >
          <span aria-hidden="true">{paused ? '▶ ' : '❚❚ '}</span>
          {paused ? playLabel : pauseLabel}
        </button>
      </div>
    </div>
  )
}
