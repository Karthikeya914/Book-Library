import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = () => {
  const { bookId } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);
      setNotFound(false);

      // First check local storage
      const savedBooks = JSON.parse(localStorage.getItem("readingList")) || [];
      const localBook = savedBooks.find((b) => b.id === bookId);

      if (localBook) {
        setBook(localBook);
        setIsLoading(false);
        return;
      }

      // If no data was found in local storage, fetch from API
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
        );
        const data = await response.json();

        if (!data || data.error) {
          setNotFound(true); // If no data was found
        } else {
          setBook(data); // Set data from API
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBook();
  }, [bookId]); // Refetch if bookId changes

  if (isLoading) return <p className="loading">Loading book details...</p>;

  if (notFound || !book || !book.volumeInfo) {
    return (
      <div className="no-book">
        <h2>Book Not Found</h2>
        <p>We couldn't find the book you are looking for.</p>
        <p>Click on "View Details" On any Book To View Details</p>
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
