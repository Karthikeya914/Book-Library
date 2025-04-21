// src/context/BookContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState(() => {
    const saved = localStorage.getItem("readingList");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever readingList changes
  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);

  const addToReadingList = (book) => {
    if (!readingList.find((item) => item.id === book.id)) {
      setReadingList([...readingList, book]);
    }
  };

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

export const useBookContext = () => useContext(BookContext);
