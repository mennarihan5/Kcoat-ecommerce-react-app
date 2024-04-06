import './App.css';
import { AboutPage } from './pages/AboutPage/index.jsx';
import { LandingPage } from './pages/LandingPage/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
