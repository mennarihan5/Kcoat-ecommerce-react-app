import './App.css';
import { AboutPage } from './pages/AboutPage/index.jsx';
import { LandingPage } from './pages/LandingPage/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { CategoriesPage } from './pages/CategoriesPage/index.jsx';
import { LoginPage } from './pages/LoginPage/index.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/categories' element={<CategoriesPage />}/>
          <Route path='/contact' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;