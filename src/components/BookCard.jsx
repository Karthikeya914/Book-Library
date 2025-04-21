import React from "react";
import { useBookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book, isRemovable = false }) {
  const { addToReadingList, removeFromReadingList, readingList } = useBookContext();

  // const isInReadingList = readingList.some((item) => item.id === book.id);
let isInReadingList = false;
   for (let i = 0; i < readingList.length; i++) {
      if (readingList[i].id === book.id) {
      isInReadingList = true;
      break;
    }
}
  const handleAdd = () => {
    addToReadingList(book);
  };

  const handleRemove = () => {
    removeFromReadingList(book.id);
  };

  const { volumeInfo } = book;
  const { title, authors, imageLinks, description } = volumeInfo;

  return (
    <div className="book-card">
      <img
        src={imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=No+Image"}
        alt={title}
        className="book-thumbnail"
      />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{authors?.join(", ") || "Unknown Author"}</p>

        <div className="book-actions">
          <Link to={`/book/${book.id}`}>
            <button className="view-details-btn">View Details</button>
          </Link>

          {isRemovable ? (
            <button className="remove-btn" onClick={handleRemove}>
              Remove
            </button>
          ) : isInReadingList ? (
            <button className="disabled-btn" disabled>
              Added
            </button>
          ) : (
            <button className="add-btn" onClick={handleAdd}>
              Add to List
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
