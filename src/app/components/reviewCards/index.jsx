import React from 'react';
import styles from './style.module.css';
import reviewImage from '../../assets/images/Ellipse 5.png';

// Example usage
const reviews = [
  {
    image: reviewImage,
    text: 'Orders came on the exact date. Items received  were as seen on the website. really love them',
    userName: 'John Eva 1',
    rating: 5,
  },
  {
    image: reviewImage,
    text: 'Orders came on the exact date. Items received  were as seen on the website. really love them',
    userName: 'John Eva 2',
    rating: 5,
  },
  {
    image: reviewImage,
    text: 'Orders came on the exact date. Items received  were as seen on the website. really love them',
    userName: 'John Eva 3',
    rating: 5,
  },
  // {
  //   image: reviewImage,
  //   text: 'Orders came on the exact date. Items received  were as seen on the website. really love them',
  //   userName: 'John Eva 4',
  //   rating: 5,
  // },
  // {
  //   image: reviewImage,
  //   text: 'Orders came on the exact date. Items received  were as seen on the website. really love them',
  //   userName: 'John Eva 5',
  //   rating: 5,
  // },
  // {
  //   image: reviewImage,
  //   text: 'Orders came on the exact date. Items received  were as seen on the website. really love them',
  //   userName: 'John Eva 6',
  //   rating: 5,
  // },
  // Add more reviews here...
];


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



const AppCards = () => {
  return (
    <div className={styles.app}> {/* Use CSS module class name for styling */}
      <ReviewCardsContainer reviews={reviews} />
    </div>
  );
};

export default AppCards;
