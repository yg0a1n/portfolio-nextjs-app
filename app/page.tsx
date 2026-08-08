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
  title: siteMeta.fr.title,
  description: siteMeta.fr.description,
  alternates: {
    canonical: canonicalPath.fr,
    languages: languageAlternates,
  },
  openGraph: {
    type: 'profile',
    title: siteMeta.fr.title,
    description: siteMeta.fr.description,
    url: canonicalPath.fr,
    locale: siteMeta.fr.locale,
  },
}

export default async function Home() {
  return (
    <div className="overflow-hidden bg-primary-black">
      <JsonLd data={buildStructuredData('fr')} />
      <Navbar />
      <Title lang="fr" />
      <div className="relative">
        <Hero lang="fr" />
        <div className="z-0 gradient-03" />
        <About lang="fr" />
      </div>
      <div className="relative">
        <Experience lang="fr" />
        <div className="z-0 gradient-04" />
        <News lang="fr" />
        <div className="z-0 gradient-04" />
        <Tasks lang="fr" />
      </div>
      <World lang="fr" />
      <div className="relative">
        <div className="z-0 gradient-04" />
        <Feedback lang="fr" />
      </div>
      <Footer lang="fr" />
    </div>
  )
}
