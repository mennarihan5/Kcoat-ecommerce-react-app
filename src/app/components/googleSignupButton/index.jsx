import React from 'react';
import styles from './style.module.css';
import google from '../../assets/images/googleIcon.png';

const LoginFormFooter = () => {
  return (
    <div className={styles.footer}>
      <hr />
      <p className={styles.text}>or</p>
      <hr />
      <button className={styles.googleButton}>
        <img src={google} alt="Gmail Icon" className={styles.gmailIcon} />
        Continue with Google
      </button>
      <p className={styles.terms}>
        By continuing, you agree to the <span className={styles.link}>Terms of Service</span> and <span className={styles.link}>Private Policy</span>.
      </p>
      <p>Already have an account? <a href="#">Log In</a></p>
    </div>
  );
}

export default LoginFormFooter;
