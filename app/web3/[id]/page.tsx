import Image from 'next/image'
import { notFound } from 'next/navigation'

import { web3ProCards } from '@/constants'

export async function generateStaticParams() {
  const web3ProCardsTranslated = web3ProCards.en || web3ProCards.fr

  return web3ProCardsTranslated.map((index) => ({
    id: index.toString(),
  }))
}

const TasksPage = ({ params }: { params: { id: string } }) => {
  const web3ProCardsTranslated = web3ProCards.en || web3ProCards.fr
  const { id } = params

  if (!web3ProCardsTranslated[parseInt(id)]) return notFound()

  const { imgFile } = web3ProCardsTranslated[parseInt(id)] || {}

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

export default TasksPage
