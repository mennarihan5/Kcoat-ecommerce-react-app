// LoginPage.js
import React from 'react';
import styles from './style.module.css'; // Import the styles for the login page
import LoginFormFooter from '../../components/googleSignupButton/index.jsx'; // Import the LoginFormFooter component from the googleSignupButton folder 
import logo from '../../assets/images/logo.svg'; // Import the logo image

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <div className={styles.companyLogo}>
          <img src={logo} alt="Company Logo" />
        </div>
        <h2>Welcome Back</h2>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <span className={styles.passwordToggle}>&#x1F441;</span>
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <LoginFormFooter /> {/* Include the component for the form footer */}
      <div className={styles.rightSection}></div> {/* Right section for background image */}
    </div>
  );
}

export default LoginPage;
