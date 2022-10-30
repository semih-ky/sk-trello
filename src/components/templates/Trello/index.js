import { useTrelloStore } from '../../../store/trelloStore'
import { Board } from '../../organisms/Board'
import { Header } from '../../organisms/Header'
import { CardInfoModal } from '../CardInfoModal'
import './styles.css'

export const Trello = () => {
  const IsModalOpen = useTrelloStore(state => state.isModalOpen);

  return (
    <div className='main'>
      <Header />
      <div className='content'>
        <Board />
      </div>
      <CardInfoModal isOpen={IsModalOpen} />
    </div>
  )
}
