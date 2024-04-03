import React from 'react';
import styles from './style.module.css'; // Import CSS module for AppCards component


const ReviewCard = ({ review }) => {
  const { image, text, userName, rating } = review;

  // Function to render gray stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className={styles.star}>&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className={styles.star}>&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className={styles['review-card']}>
      <img src={image} alt="Review" className={styles['review-image']} />
      <p className={styles['review-text']}>{text}</p>
      <p className={styles['user-name']}>{userName}</p>
      <div className={styles.stars}>{renderStars()}</div>
    </div>
  );
};

const ReviewCardsContainer = ({ reviews }) => {
  return (
    <div className={styles['review-cards-container']}>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

// Example usage
const reviews = [
  {
    image: 'image1.jpg',
    text: 'This product is amazing! I would highly recommend it.',
    userName: 'John Doe',
    rating: 5,
  },
  {
    image: 'image2.jpg',
    text: 'Not impressed with the quality. Could be better.',
    userName: 'Jane Smith',
    rating: 2,
  },
  // Add more reviews here...
];

const AppCards = () => {
  return (
    <div className={styles.app}> {/* Use CSS module class name for styling */}
      <h1>Product Reviews</h1>
      <ReviewCardsContainer reviews={reviews} />
    </div>
  );
};

export default AppCards;
