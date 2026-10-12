import { Fragment } from 'react'

import EcosystemSites from '@/components/ecosystem-card'
import RealizationsCard from '@/components/realizations-card'
import TitleText from '@/components/title-text'
import TypingText from '@/components/typing-text'
import { staggerContainer, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

export default function PersonalProjects({
  typingText,
  title,
  personalProjects,
  ecosystem,
  isDark,
}: {
  lang?: string
  typingText: string
  title: string
  personalProjects: any[]
  ecosystem?: {
    imgFile: string
    title: string
    subtitle: string
    href: string
    tags: string[]
    sites: React.ComponentProps<typeof EcosystemSites>['sites']
    siteLabel: string
    pauseLabel: string
    playLabel: string
  }
  isDark: boolean
}) {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      // amount 0.05 et non 0.25 : le conteneur n'apparaissait que si 25 % de SA hauteur tenait à l'écran,
      // donc jamais quand il dépasse 4 hauteurs d'écran (iPhone 390/414 avec l'écosystème, 320/375/640
      // déjà avant) — gate agent-tools #2403.
      viewport={{ once: false, amount: 0.05 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <TypingText title={typingText} textStyles="text-center" />
      <motion.div variants={textVariant(1.1)}>
        <TitleText title={<>{title}</>} textStyles="text-center" />
      </motion.div>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {/* Écosystème FlexiWeb EVO AVANT boTTyn Social (yg0a1n, 2026-10-12) : même carte que les autres
            projets (image, texte, flèche), puis les trois sous-domaines dans l'encadré, comme la démo de boTTyn. */}
        {ecosystem && (
          <>
            <RealizationsCard
              index={0}
              imgFile={ecosystem.imgFile}
              title={ecosystem.title}
              subtitle={ecosystem.subtitle}
              href={ecosystem.href}
              tags={ecosystem.tags}
              isDark={isDark}
            />
            <EcosystemSites
              sites={ecosystem.sites}
              siteLabel={ecosystem.siteLabel}
              pauseLabel={ecosystem.pauseLabel}
              playLabel={ecosystem.playLabel}
            />
          </>
        )}
        {personalProjects.map((project, index) => (
          <Fragment key={`realizations-${index}`}>
            <RealizationsCard index={index} {...project} isDark={isDark} />
            {index === 0 && (
              <div className="flex flex-col gap-4 rounded-3xl border border-black/10 dark:border-slate-50/10 p-6">
                <p className="font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  {project.demoText}
                </p>
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center">
                  <video
                    src="/img/bottyn-slide1-mobile.mp4"
                    poster="/img/bottyn-slide1-mobile-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[400px] w-auto rounded-2xl"
                  />
                  <video
                    src="/img/bottyn-slide2-bis.mp4"
                    poster="/img/bottyn-slide2-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[400px] w-auto max-w-full rounded-2xl"
                  />
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </motion.div>
  )
}
