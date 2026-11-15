import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { newFeatureCards } from '@/constants'

// Page de secours d'une image ouverte en fenêtre depuis l'accueil : sans texte propre,
// Google la classait en double de l'accueil. Elle reste accessible, hors de l'index.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
}

export async function generateStaticParams() {
  const newFeatureCardsTranslated = newFeatureCards.en || newFeatureCards.fr

  return newFeatureCardsTranslated.map((index) => ({
    id: index.toString(),
  }))
}

const NewsPage = ({ params }: { params: { id: string } }) => {
  const newFeatureCardsTranslated = newFeatureCards.en || newFeatureCards.fr
  const { id } = params

  if (!newFeatureCardsTranslated[parseInt(id)]) return notFound()

  const { imgFile } = newFeatureCardsTranslated[parseInt(id)] || {}

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Image
        src={`/img/${imgFile}`}
        alt="project tasks image"
        width={1000}
        height={1000}
      />
    </div>
  )
}

export default NewsPage
