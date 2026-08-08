import About from '@/app/sections/about'
import Experience from '@/app/sections/experience'
import Feedback from '@/app/sections/feedback'
import Hero from '@/app/sections/hero'
import News from '@/app/sections/news'
import Tasks from '@/app/sections/tasks'
import Title from '@/app/sections/title'
import World from '@/app/sections/world'
import Footer from '@/components/footer'
import JsonLd from '@/components/json-ld'
import Navbar from '@/components/navbar'
import { canonicalPath, languageAlternates, siteMeta } from '@/constants/site'
import { buildStructuredData } from '@/utils/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteMeta.en.title,
  description: siteMeta.en.description,
  alternates: {
    canonical: canonicalPath.en,
    languages: languageAlternates,
  },
  openGraph: {
    type: 'profile',
    title: siteMeta.en.title,
    description: siteMeta.en.description,
    url: canonicalPath.en,
    locale: siteMeta.en.locale,
  },
}

export default async function Home() {
  return (
    /* Le layout racine, unique, déclare `<html lang="fr">` : `lang` est redéclaré ici
       pour que le sous-arbre anglais ne soit pas annoncé comme français. */
    <div lang="en" className="overflow-hidden bg-primary-black">
      <JsonLd data={buildStructuredData('en')} />
      <Navbar />
      <Title lang="en" />
      <div className="relative">
        <Hero lang="en" />
        <div className="z-0 gradient-03" />
        <About lang="en" />
      </div>
      <div className="relative">
        <Experience lang="en" />
        <div className="z-0 gradient-04" />
        <News lang="en" />
        <div className="z-0 gradient-04" />
        <Tasks lang="en" />
      </div>
      <World lang="en" />
      <div className="relative">
        <div className="z-0 gradient-04" />
        <Feedback lang="en" />
      </div>
      <Footer lang="en" />
    </div>
  )
}
