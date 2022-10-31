import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
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
      <DndProvider backend={HTML5Backend}>
        <div className='content'>
          {searchData ? (
            <SearchResult results={searchData} />
          ) : (
            <Board />
          )}
        </div>
      </DndProvider>
      <CardInfoModal isOpen={IsModalOpen} />
    </div>
  )
}
