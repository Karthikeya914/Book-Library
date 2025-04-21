import React from "react";
import { useBookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book, isRemovable = false }) {
  const { addToReadingList, removeFromReadingList, readingList } = useBookContext();

  // Check if the current book is already in the reading list
  let isInReadingList = false;
  for (let i = 0; i < readingList.length; i++) {
    if (readingList[i].id === book.id) {
      isInReadingList = true;
      break;
    }
  }

  const handleAdd = () => {
    addToReadingList(book); // Add the book to the list
  };

  const handleRemove = () => {
    removeFromReadingList(book.id); // Remove the book by its ID
  };

  const { volumeInfo } = book;
  const { title, authors, imageLinks, description } = volumeInfo;

  return (
    <div className="book-card">
      <img
        // A Default is image shown if book thumbnail is not available
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
            // If the card is in reading list page, allow removing
            <button className="remove-btn" onClick={handleRemove}>
              Remove
            </button>
          ) : isInReadingList ? (
            // Disable add button if book is already in list
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
