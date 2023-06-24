import React, { useState } from 'react';
import styles from './FavouriteArticles.module.css';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    // Perform any actions with the rating and comment here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    setRating(0);
    setComment('');
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleForm}>{isOpen ? 'Close Form' : 'Open Form'}</button>
      {isOpen && (
        <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
          <h2 className={styles.formTitle}>Leave a Review</h2>
          <div className={styles.ratingContainer}>
            <label className={styles.ratingLabel}>Rating:</label>
            <div className={styles.starRating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`${styles.star} ${
                    star <= rating
                      ? styles.filled
                      : star - 0.5 <= rating
                      ? styles['half-filled']
                      : ''
                  }`}
                  onClick={() => handleRatingChange(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <div className={styles.commentContainer}>
            <label className={styles.commentLabel}>Comment:</label>
            <textarea
              className={styles.commentTextarea}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your comment here..."
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
