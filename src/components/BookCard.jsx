// src/components/BookCard.jsx
import React from "react";
import { useBookContext } from "../context/BookContext";

function BookCard({ book }) {
  const { addToReadingList, readingList, removeFromReadingList } = useBookContext();
  const isInReadingList = readingList.some((item) => item.id === book.id);

  const {
    title,
    authors,
    imageLinks,
    previewLink,
    description,
  } = book.volumeInfo;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        width: "250px",
      }}
    >
      {imageLinks?.thumbnail && (
        <img
          src={imageLinks.thumbnail}
          alt={title}
          style={{ width: "100%", height: "auto", marginBottom: "0.5rem" }}
        />
      )}
      <h3>{title}</h3>
      {authors && <p>By: {authors.join(", ")}</p>}

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {!isInReadingList ? (
          <button onClick={() => addToReadingList(book)}>Add To My List</button>
        ) : (
          <button onClick={() => removeFromReadingList(book.id)}>Remove</button>
        )}

        {previewLink && (
          <button
            onClick={() => window.open(previewLink, "_blank")}
            style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "6px 10px", borderRadius: "4px" }}
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;
