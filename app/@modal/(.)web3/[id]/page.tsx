import Image from 'next/image'
import { notFound } from 'next/navigation'

import Modal from '@/components/modal'
import { web3ProCards } from '@/constants'

const TasksModalPage = ({ params }: { params: { id: string } }) => {
  const web3ProCardsTranslated = web3ProCards.en || web3ProCards.fr
  const { id } = params

  if (!web3ProCardsTranslated[parseInt(id)]) return notFound()

  const { imgFile } = web3ProCardsTranslated[parseInt(id)] || {}

  return (
    <Modal>
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={`/img/${imgFile}`}
          alt="project tasks image"
          width={1800}
          height={1800}
        />
      </div>
    </Modal>
  )
}

export default TasksModalPage
