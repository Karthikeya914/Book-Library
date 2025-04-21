// src/pages/MyList.jsx
import React from "react";
import { useBookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import "./MyList.css"; 

const MyList = () => {
  const { readingList } = useBookContext();

  return (
    <div className="mylist-container">
      <h1>My Reading List</h1>
      <div className="reading-list-container">
      {readingList.length > 0 ? (
        readingList.map((book) => (
          <BookCard key={book.id} book={book} isRemovable />
        ))
      ) : (
        <p>Your reading list is empty.</p>
      )}
    </div>
    </div>
  );
};

export default MyList;
