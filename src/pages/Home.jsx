import React, { useEffect, useState } from "react";
import { useBookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import "./Home.css";

function Home() {
  const { books, setBooks } = useBookContext(); // Accessing books and setter from context
  const [suggestions, setSuggestions] = useState([]); // State to hold search suggestions

  // Function for fetching books from Google Books API
  const fetchBooks = async (query = "") => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
      );
      const data = await response.json();
      const items = data.items || [];
      setBooks(items); // Update context state with fetched books 

      // Extract and store book titles as suggestions for the search bar
      const titles = items.map((item) => item.volumeInfo.title);
      setSuggestions(titles);
    } catch (error) {
      console.error("Error fetching books:", error); // Log any errors that occur during fetching
    }
  };

  // Fetch books when the component first mounts
  useEffect(() => {
    fetchBooks(); // Initial fetch with an empty query
  }, []);

  // Handles user search input from SearchBar component
  const handleSearch = (query) => {
    fetchBooks(query);
  };

  return (
    <div className="home">
      <h1 className="page-title">Search Books</h1>
      {/* Search bar with live suggestions */}
      <SearchBar onSearch={handleSearch} suggestions={suggestions} />

      <div className="book-list">
        {/* Render BookCard for each fetched book, or show fallback message */}
        {books && books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>Searched Books Will be Available Here</p>
        )}
      </div>
    </div>
  );
}

export default Home;
