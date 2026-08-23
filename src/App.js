import { useEffect } from 'react';
import './App.css';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Navbar from './components/navigation/navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MyProjects from './components/projects/projects';
import { ThemeProvider } from './theme/ThemeProvider';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // React Router keeps the scroll position across route changes, so moving from
  // a long page to a short one leaves the reader clamped partway down the new
  // one — it reads as the page yanking itself upward.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<MyProjects/>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
