import React, { useState } from 'react'

interface SearchResultProps {
    searchTerm: string
    isFocused: boolean
}

const SearchResult:React.FC<SearchResultProps> = ({ searchTerm , isFocused}) => {
    const namesArray = ["John", "Jane", "Alice", "Bob", "Charlie", "David"];

    const filteredNames = namesArray.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    console.log("Searching for:", searchTerm);
  return (
   <div style={{position: "absolute",zIndex: 9}}>
        {isFocused && (
        <div>
          {filteredNames.length === 0 ? (
            <p>No results found</p>
          ) : (
            <ul>
              {filteredNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      )}

    </div>
  )
}

export default SearchResult