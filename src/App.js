import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Preloader from './components/preloader';
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  useEffect(() => {
    function disablePreloader() {
      const loader = document.getElementsByClassName('preloader')[0];
      if (loader) { // ПРОВЕРКА СУЩЕСТВОВАНИЯ LOADER
        loader.style.display = 'none';
      }
    }
    setTimeout(() => {
      disablePreloader();
    }, 3000);
  }, []);

  return (
    <>
      <Preloader /> {/* И ЭТУ СТРОКУ */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
