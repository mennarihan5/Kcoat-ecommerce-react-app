import React, { useState } from 'react';
import { Header } from '../../components/Header';
import styles from './style.module.css';
import contactpagepic from '../../assets/images/contactpage.jpg';
import { Footer } from '../../components/Footer/index.jsx';
import SubscriptionCard  from '../../components/newsLetterSection/index.jsx';
import facebookicon from '../../assets/images/facebookicon.jpg';
import instaicon from '../../assets/images/instaicon.jpg';
import whatsappicon from '../../assets/images/whatsappicon.jpg';

export const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ fullName, email, message });
  };

  return (
    <div>
      <Header />
      <div>
      <h1 className={styles.contact}>Contact Us</h1>
        </div>
      <div className={styles.contactForm}>
        <div className={styles.leftContent}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.name}>Full Name</label>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={styles.input}
                />
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.name}>Email</label>
              <div className={styles.inputContainer}>
              <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={styles.input}
                />
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.name}>Message</label>
              <div className={styles.inputContainer}>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={styles.input}
                ></textarea>
                <hr className={styles.hr} />
              </div>
            </div>
            <button type="submit" className={styles.contactus}>Contact Us</button>
          </form>

          
        </div>
        <div className={styles.rightContent}>
          <h3 className={styles.contacttext}>Contact</h3>
          <p>
            KCOAT@fashion.com
          </p><br />
          <p className={styles.righttext1}>
            Based in
          </p>
          <p className={styles.righttext2}>
            Lagos,
          </p>
          <p className={styles.righttext3}>
            Nigeria
          </p>

          <div className={styles.iconcontainer}>
          <img src={whatsappicon} className={styles.whatsappicon} />
          <img src={instaicon} className={styles.instaicon} />
          <img src={facebookicon} className={styles.facebookicon} />
        </div>
        </div>
      
      </div>
      <div className={styles.imageContainer}>
        <img src={contactpagepic} alt="your_image_alt" className={styles.image} />
      </div>
      <div className={styles.newslettersection}>
        <SubscriptionCard/>
        </div> 
        <div className={styles.Footer}>  
        <Footer/>
        </div> 
        
    </div>
  );
};


export default ContactPage;

