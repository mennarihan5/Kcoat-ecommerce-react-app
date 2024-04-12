import React, { useState } from 'react';
import styles from './style.module.css'; 
import LoginFormFooter from '../../components/googleSignupButton/index.jsx'; 
import logo from '../../assets/images/logo.svg'; 
import { Link } from 'react-router-dom';

import eye from '../../assets/images/Right Content.jpg'; 

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <div className={styles.companyLogo}>
          <img src={logo} alt="Company Logo" transparentBackground={false}/>
        </div>
        <h2 className={styles.welcome}>Welcome Back</h2>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label className={styles.email}>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input 
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              placeholder="Enter your password" 
            />
            <img 
              src={eye} 
              alt="Eye Icon" 
              className={styles.passwordToggle} 
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            />
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className={styles.forgot}>Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
        {/* Add a link to the signup page */}
        <p className={styles.account}>Don't have an account? <Link to="/signup" className={styles.signup}>Sign Up</Link></p>
      </div>
        <LoginFormFooter /> 
      </div>
      <div className={styles.rightSection}></div>
    </div>
  );
}

export default LoginPage;
