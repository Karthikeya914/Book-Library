import React from "react";
import { useBookContext } from "../context/BookContext"; // Access shared book data from context
import BookCard from "../components/BookCard"; // Component to display each book info
import "./MyList.css"; 

const MyList = () => {
  const { readingList } = useBookContext(); // Using Context Api to get Books 

  return (
    <div className="mylist-container">
      <h1>My Reading List</h1>
      <div className="reading-list-container">
        {/* Show books if the reading list is not empty */}
        {readingList.length > 0 ? (
          readingList.map((book) => (
            <BookCard key={book.id} book={book} isRemovable />
          ))
        ) : (
          <p>Your reading list is empty.</p> // Message if no books in the list
        )}
      </div>
    </div>
  );
};

export default MyList;
