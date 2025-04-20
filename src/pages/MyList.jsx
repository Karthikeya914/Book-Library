import React from 'react';
import { useBookContext } from '../context/BookContext.jsx';
import BookCard from '../components/BookCard.jsx';

function MyList() {
  const { readingList } = useBookContext();

  return (
    <div className="page">
      <h2>My Reading List</h2>
      {readingList.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="book-list">
          {readingList.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyList;
