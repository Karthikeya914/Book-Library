import React, { useState } from 'react';

function AddReview() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && review.trim() !== '') {
      alert(`Thanks for your review, ${name}!`);
      setName('');
      setReview('');
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="page">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
