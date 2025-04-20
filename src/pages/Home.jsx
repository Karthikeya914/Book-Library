import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext.jsx';
import BookCard from '../components/BookCard.jsx';

function Home() {
  const [query, setQuery] = useState('');
  const { books, setBooks } = useBookContext();

  const handleSearch = () => {
    if (query.trim() === '') return;

    const API_KEY = 'AIzaSyD9JUUiPiAJRz6oGLzSRqssb-1yGfJRTDA'; // Replace with actual key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setBooks(data.items);
        } else {
          setBooks([]);
        }
      })
      .catch(err => {
        console.error("Error fetching books:", err);
      });
  };

  return (
    <div className="page">
      <h2>Search Books</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="book-list">
        {books.map((item, index) => (
          <BookCard key={index} book={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
