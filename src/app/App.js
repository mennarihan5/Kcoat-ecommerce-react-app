import './App.css';
import { AboutPage } from './pages/AboutPage/index.jsx';
import { LandingPage } from './pages/LandingPage/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { CategoriesPage } from './pages/CategoriesPage/index.jsx';
import { LoginPage } from './pages/LoginPage/index.jsx';
import { SignupPage } from './pages/SignupPage/index.jsx';
import { ContactPage } from './pages/ContactPage/index.jsx';
import { CartPage } from './pages/CartPage/index.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/categories' element={<CategoriesPage />}/>
          <Route path='/login' element={<LoginPage />}/> 
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/contact' element={<ContactPage />}/> 
          <Route path='/cart' element={<CartPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;