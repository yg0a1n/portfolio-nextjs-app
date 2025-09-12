'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { useQRCode } from 'next-qrcode'

import TypingText from '@/components/typing-text'
import { getStartedContent, startingFeatures } from '@/constants'

import { fadeIn, staggerContainer } from '@/utils/motion'

export default function Hero({ lang }: { lang: string }) {
  const { Canvas } = useQRCode()

  const { typingText, title, linkText } =
    lang === 'en' ? getStartedContent.en : getStartedContent.fr

  const startingFeaturesTranslate =
    lang === 'en' ? startingFeatures.en : startingFeatures.fr

  return (
    <section id="hero" className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[70%] w-[100%] mx-auto flex lg:flex-row flex-col gap-8"
      >
        <div className="flex-[0.35] flex justify-center items-center">
          <motion.img
            variants={fadeIn('right', 'tween', 0.3, 1)}
            src="/img/photo-linkedIn.jpeg"
            alt="Yannick goalen identity photo"
            className="object-cover w-40 h-40 rounded-full"
          />
        </div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={typingText} />
          <div className="mt-[31px] flex flex-col max-w-[470px] gap-[24px]">
            <div className="flex flex-row justify-center items-center">
              <p className="flex-1 ml-[30px] font-normal text-md leading-[32.4px] text-justify">
                {startingFeaturesTranslate}
              </p>
            </div>

            <div className="flex gap-4 justify-between items-center">
              <div className="flex gap-2 items-center">
                {linkText}
                <a
                  href="https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf"
                  className="cv-icon"
                  title="Web and Mobile Web Developer Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
