'use client'

import { motion } from 'framer-motion'

import { siteMeta } from '@/constants/site'
import { staggerContainer, textVariant } from '@/utils/motion'

export default function Title({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  return (
    <section id="title" className="py-12 pl-6 sm:py-16 xs:py-8 sm:pl-16">
      {/* Le lettrage ci-dessous est décoratif : le vrai titre de la page est ici. */}
      <h1 className="sr-only">{siteMeta[lang].heading}</h1>
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex relative z-10 flex-col justify-center items-center">
          <motion.div
            aria-hidden="true"
            variants={textVariant(0.4)}
            className="flex flex-row w-[95%] justify-center items-center mr-4 md:mr-20"
          >
            <span className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
              P
            </span>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-[var(--high-contrast-text)] dark:border-[var(--high-contrast-text)]lg:mb-[-50px] sm:ml-0.5 md:mb-[-12px] sm:mb-[-8px] ml-0.5" />
            <span className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase ml-1">
              rtf
            </span>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-[var(--high-contrast-text)] dark:border-[var(--high-contrast-text)]lg:mb-[-50px] sm:ml-0.5 md:mb-[-12px] sm:mb-[-8px] mr-1" />
            <span className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
              li
            </span>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-[var(--high-contrast-text)] dark:border-[var(--high-contrast-text)]lg:mb-[-50px] sm:ml-0.5 md:mb-[-12px] sm:mb-[-8px] ml-1" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
