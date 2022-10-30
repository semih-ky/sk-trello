import { Board } from '../../organisms/Board'
import { Header } from '../../organisms/Header'
import { CardInfoModal } from '../CardInfoModal'
import './styles.css'

export const Trello = () => {
  return (
    <div className='main'>
      <Header />
      <div className='content'>
        <Board />
      </div>
      <CardInfoModal />
    </div>
  )
}
