// imp
import React from 'react';
import styles from './style.module.css';
import firstButton from '../../assets/images/firstbutton.svg';
import flexiblePayment from '../../assets/images/flexiblePayment.svg';
import customerSupport from '../../assets/images/customerSupport.svg';
import buyersProtection from '../../assets/images/buyersProtection.svg';


function Card({ logo, heading, description }) {
  return (
    <div className={styles.card}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      {/* Content */}
      <div className={styles.content}>
        {/* Heading */}
        <div className={styles.heading}>{heading}</div>
        {/* Description */}
        <div className={styles.description}>{description}</div>
      </div>
  
    </div>
  );
}

function App() {
  // Sample data for cards
  const cardsData = [
    {
      logo: firstButton,
      heading: 'Worldwide Delivery',
      description: 'To your destination',
    },
    {
      logo: flexiblePayment,
  heading: 'Flexible payment',
  description: 'Payment with choices',
    },
    {
      logo: customerSupport,
  heading: 'Customer SupportCard',
  description: '24/7 Online Support',
    },
    {
      logo: buyersProtection,
  heading: 'Buyers Protection',
  description: 'Secured Payment',
    },
  ];

  return (
    <div className={styles.app}>
      {cardsData.map((card, index) => (
        <Card key={index} logo={card.logo} heading={card.heading} description={card.description} />
      ))}
    </div>
  );
}

export default App;
