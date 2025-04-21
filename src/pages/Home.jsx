import React, { useEffect, useState } from "react";
import { useBookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import "./Home.css";

function Home() {
  const { books, setBooks } = useBookContext();
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load saved search query from localStorage on component mount
  useEffect(() => {
    const savedQuery = localStorage.getItem("bookSearchQuery") || "";
    if (savedQuery) {
      setSearchQuery(savedQuery);
      fetchBooks(savedQuery);
    } else {
      fetchBooks();
    }
  }, []);

  const fetchBooks = async (query = "") => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
      );
      const data = await response.json();
      const items = data.items || [];
      setBooks(items);

      // Update suggestions (titles only)
      const titles = items.map((item) => item.volumeInfo.title);
      setSuggestions(titles);
      
      // Save the search query to localStorage
      localStorage.setItem("bookSearchQuery", query);
      setSearchQuery(query);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = (query) => {
    fetchBooks(query);
  };

  return (
    <div className="home">
      <h1 className="page-title">Search Books</h1>
      <SearchBar 
        onSearch={handleSearch} 
        suggestions={suggestions} 
        initialValue={searchQuery} // Pass the initial value to SearchBar
      />

      <div className="book-list">
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
