'use client'

import { motion } from 'framer-motion'

import { feedbacksContents } from '@/constants'
import { fadeIn, staggerContainer } from '@/utils/motion'
import Image from 'next/image'

export default function Feedback({ lang }: { lang: string }) {
  const { title, subtitle, content } =
    lang === 'en' ? feedbacksContents.en : feedbacksContents.fr

  return (
    <section id="feedback" className="px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-6"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[670px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px]">
              {title}
            </h4>
            <p className="mt-[8px] font-normal sm:text-md text-[12px] sm:leading-[22.68px] leading-[16.68px]">
              {subtitle}
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-md sm:leading-[45.6px] leading-[39.6px]">
            {content}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex relative flex-1 justify-center items-center"
        >
          <Image
            src="/img/moi-pro.jpg"
            alt="photo professionnelle"
            className="w-full h-auto max-h-[600px] object-cover object-[50%_20%] rounded-[40px] overflow-hidden"
            width={3081}
            height={4621}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
