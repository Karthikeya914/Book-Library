import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  return (
    <BookContext.Provider value={{ books, setBooks, readingList, setReadingList }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  return useContext(BookContext);
}
