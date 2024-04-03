import React from 'react';
import styles from './style.module.css';

class SubscriptionCard extends React.Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.subscriptionDetails}>
          <h2>Subscribe to Our Newletter</h2>
          <p>Stay updated with latest information on trend, sales and arrival. </p>
        </div>
        <div className={styles.subscriptionForm}>
          <form>
            <label htmlFor="address">Enter Address:</label>
            <input type="text" id="address" name="address" />
            <button type="submit">Submit</button>
          </form>
          <p>Fill in your address to complete the subscription.</p>
        </div>
      </div>
    );
  }
}

export default SubscriptionCard;
