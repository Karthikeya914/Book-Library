import React from 'react';
import { useBookContext } from '../context/BookContext.jsx';

function BookCard({ book }) {
  const { readingList, setReadingList } = useBookContext();

  const addToList = () => {
    const alreadyAdded = readingList.find(item => item.id === book.id);
    if (!alreadyAdded) {
      setReadingList([...readingList, book]);
      alert("Book added to reading list!");
    } else {
      alert("Book already in the list!");
    }
  };

  const volume = book.volumeInfo;

  return (
    <div className="book-card">
      <img
        src={volume.imageLinks?.thumbnail || 'https://via.placeholder.com/128x180'}
        alt={volume.title}
      />
      <div className="book-details">
        <h3>{volume.title}</h3>
        <p>{volume.authors ? volume.authors.join(', ') : 'Unknown Author'}</p>
        <button onClick={addToList}>Add to Reading List</button>
      </div>
    </div>
  );
}

export default BookCard;
