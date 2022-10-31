import React from 'react'
import { Card } from '../../molecules/Card'
import './styles.css'


export const SearchResult = ({ results }) => {
  return (
    <div className='search-result-container'>
      <h2 className='search-result-title'>Search Results</h2>

      {results.map(result => (
        <Card key={result?.id} card={result} />
      ))}

      {!!results.length || (
        <h2 className='search-no-result-title'>No Result</h2>
      )}
    </div>
  )
}

