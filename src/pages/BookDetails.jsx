// src/pages/BookDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // loading state
  const [notFound, setNotFound] = useState(false); // book not found state

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);
      setNotFound(false);

      // Try from localStorage
      const savedBooks = JSON.parse(localStorage.getItem("readingList")) || [];
      const localBook = savedBooks.find((b) => b.id === bookId);

      if (localBook) {
        setBook(localBook);
        setIsLoading(false);
        return;
      }

      // Fallback: Fetch from Google Books API
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyD9JUUiPiAJRz6oGLzSRqssb-1yGfJRTDA`
        );
        const data = await response.json();

        if (!data || data.error) {
          setNotFound(true);
        } else {
          setBook(data);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  if (isLoading) return <p className="loading">Loading book details...</p>;

  if (notFound || !book || !book.volumeInfo) {
    return (
      <div className="no-book">
        <h2>Book Not Found</h2>
        <p>We couldn't find the book you're looking for.</p>
        <Link to="/" className="back-home-link">← Back to Home</Link>
      </div>
    );
  }

  const { title, authors, description, imageLinks, publisher, previewLink } = book.volumeInfo;

  return (
    <div className="book-details">
      <img
        src={imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={title}
      />
      <div className="info">
        <h2>{title}</h2>
        <p><strong>Author(s):</strong> {authors?.join(", ")}</p>
        <p><strong>Publisher:</strong> {publisher}</p>
        <p><strong>Description:</strong> {description || "No description available."}</p>
        <a href={previewLink} target="_blank" rel="noopener noreferrer">
          Preview this book
        </a>
      </div>
    </div>
  );
};

export default BookDetails;
