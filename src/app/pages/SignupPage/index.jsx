// SigniUnPage.js
import React, { useState } from 'react';

import styles from './style.module.css'; // Import the styles for the login page
import LoginFormFooter from '../../components/googleSignupButton/index.jsx'; // Import the LoginFormFooter component from the googleSignupButton folder 
// import logo from '../../assets/images/logo.svg'; // Import the logo image
import eye from '../../assets/images/Right Content.jpg'; // Import the eye image
import {Logo} from '../../components/Logo/index.jsx';


export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State for password visibility


  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
      <div className={styles.logo}>
                <Logo className={styles.img} background={false}/>
            </div> 

      {/* <div className={styles.companyLogo}>
          <img src={logo} alt="Company Logo" />
        </div> */}
        <h2 className={styles.create}>Create your free account</h2>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="email" placeholder="Full Name" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Tech4Dev@kcoat.com" />
            </div>
            <div className={styles.formGroup}>
            <label>Password</label>
            {/* <input type="password"  /> */}
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
            {/* <span className={styles.passwordToggle}>&#x1F441;</span>  */}
          </div>

          <div className={styles.formGroup}>
            <label>Confirm Password</label>
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
          <button type="submit">Sign Up</button>
        </form>
        <LoginFormFooter />
      </div>
      {/* <LoginFormFooter /> Include the component for the form footer */}
      <div className={styles.rightSection}></div> {/* Right section for background image */}
    </div>
  );
}

export default SignupPage;
