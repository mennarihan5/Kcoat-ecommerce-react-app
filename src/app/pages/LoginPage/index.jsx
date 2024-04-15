import React, { useState } from 'react';
import styles from './style.module.css'; 
import LoginFormFooter from '../../components/googleSignupButton/index.jsx'; 
import { Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Logo } from '../../components/Logo/index.jsx';
import eye from '../../assets/images/Right Content.jpg';
import userData from '../../.env/acoount.json';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirectTo, setRedirectTo] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const user = userData.find(user => user.email === email && user.password === password);

    if (user) {
      if (user['account-type'] > 0) {
        setRedirectTo('/admin-dashboard'); // Redirect admin user to admin dashboard
      } else {
        setRedirectTo('/'); // Redirect regular user to landing page
      }
    } else {
      setError(<span style={{ color: 'blue'}}>Incorrect email or password</span>); 
    }
  };

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Logo className={styles.img} background={false}/>
        </div>    

        <h2 className={styles.welcome}>Welcome Back</h2>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label className={styles.email}>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
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
          <button id={styles.loginButton} type="submit" onClick={handleLogin}>Login</button>
        </form>
        {error && <p>{error}</p>}
        <div>
          <p className={styles.account}>Don't have an account? <Link to="/signup" className={styles.signup}>Sign Up</Link></p>
        </div>
        <LoginFormFooter /> 
      </div>
      <div className={styles.rightSection}></div>
    </div>
  );
}

export default LoginPage;
