import React, { useState } from 'react';
import styles from './style.module.css';
import LoginFormFooter from '../../components/googleSignupButton/index.jsx';
import eye from '../../assets/images/Right Content.jpg';
import { Logo } from '../../components/Logo/index.jsx';

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });
    try {
      const response = await fetch('https://kcoat-ecommerce-react-app.onrender.com/auth/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      // const responseData = await response.json();
      // setData(responseData);
      if (response.ok) {
        setSuccessMessage("Signup successful!"); // Display success message
      } else {
        const responseData = await response.json();
        setError(responseData.message || 'Unknown error occurred');
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Logo className={styles.img} background={false}/>
        </div> 

        <h2 className={styles.create}>Create your free account</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>

        <div className={styles.formGroup}>
            <label className={styles.name}>Name</label>
            <input type="email" name="name" placeholder="Full Name" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.email}>Email</label>
            <input type="email" name="name" placeholder="Tech4Dev@kcoat.com" />
          </div>

          <div className={styles.passwordformGroup}>
            <label className={styles.password}>Password</label>
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              placeholder="Enter your password" 
            />
            <img 
              src={eye} 
              alt="Eye Icon" 
              className={styles.passwordToggle} 
              onClick={() => setShowPassword(!showPassword)} 
            />
          </div>

          <div className={styles.confirmformGroup}>
            <label className={styles.confirm}>Confirm Password</label>
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="confirmPassword" 
              placeholder="Confirm your password" 
            />
            <img 
              src={eye} 
              alt="Eye Icon" 
              className={styles.passwordToggle} 
              onClick={() => setShowPassword(!showPassword)} 
            />          
          </div>
          
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className={styles.forgot}>Forgot Password?</a>
          </div>
          <button type="submit">{loading ? 'Signing Up...' : 'Sign Up'}</button>
        </form>
        {error && <p>{error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        <LoginFormFooter />
      </div>
      <div className={styles.rightSection}></div>
    </div>
  );
}

export default SignupPage;
