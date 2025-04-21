import React, { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Initialize reading list from localStorage (if available)
  const [readingList, setReadingList] = useState(() => {
    const saved = localStorage.getItem("readingList");
    return saved ? JSON.parse(saved) : [];
  });

  // Save updated reading list to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);

  // Add book to reading list only if it's not there
  const addToReadingList = (book) => {
    if (!readingList.find((item) => item.id === book.id)) {
      setReadingList([...readingList, book]);
    }
  };

  // Remove a book from the reading list by its ID
  const removeFromReadingList = (id) => {
    setReadingList(readingList.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ books, setBooks, readingList, addToReadingList, removeFromReadingList }}
    >
      {children}
    </BookContext.Provider>
  );
};

// Exporting the Context created here
export const useBookContext = () => useContext(BookContext);
