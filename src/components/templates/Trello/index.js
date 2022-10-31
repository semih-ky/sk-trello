import { useTrelloStore } from '../../../store/trelloStore'
import { Board } from '../../organisms/Board'
import { Header } from '../../organisms/Header'
import { SearchResult } from '../../organisms/SearchResult'
import { CardInfoModal } from '../CardInfoModal'
import './styles.css'

export const Trello = () => {
  const IsModalOpen = useTrelloStore(state => state.isModalOpen);
  const searchData = useTrelloStore(state => state.searchData);


  return (
    <div className='main'>
      <Header />
      <div className='content'>
        {searchData ? (
          <SearchResult results={searchData} />
        ) : (
          <Board />
        )}
      </div>
      <CardInfoModal isOpen={IsModalOpen} />
    </div>
  )
}
