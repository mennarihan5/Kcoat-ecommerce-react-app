// LoginPage.js
import React from 'react';
import styles from './style.module.css';
import logingirl from '../../assets/images/logingirl.jpg';
import logo from '../../assets/images/logo.svg';
const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <div className={styles.companyLogo}>
          <img src={logo} alt="Company Logo"  />
        </div>
        <h2 id={styles.welcome
        }>Welcome Back</h2>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Tech4Dev@kcoat.com" />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <span className={styles.passwordToggle}>&#x1F441;</span>
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Remember me?
            </label>
            <a href="#" id={styles.forgot}>Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className={styles.rightSection}>
        <img src={logingirl} alt="Background Image" className={styles.backgroundImage} />
      </div>
    </div>
  );
}

export default LoginPage;
