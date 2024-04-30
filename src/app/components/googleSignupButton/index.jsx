import React from 'react';
import styles from './style.module.css';
import google from '../../assets/images/googleIcon.png';
import { Link } from 'react-router-dom';

const LoginFormFooter = () => {
  return (
    <div className={styles.footer}>
      <hr className={styles.line1} />
      <hr className={styles.line2} />
      <p className={styles.text}>or</p>
    
      
      
      <button className={styles.googleButton}>
        <img src={google} alt="Gmail Icon" className={styles.gmailIcon} />
       <span className={styles.continue}>Continue with Google</span>
      </button>
      <p className={styles.terms}>
        By continuing, you agree to the <span className={styles.link}>Terms of Service</span> and <span className={styles.link}><Link to='/PrivacyPolicy'>Private Policy</Link></span>.
      </p>
      {/* <p className={styles.already}>Already have an account? <Link  className={styles.login}>Log In</a></p> */}
      <p className={styles.account}>Already have an account? <Link to="/login" className={styles.login}>Log In</Link></p>

      
    </div>
  );
}

export default LoginFormFooter;
