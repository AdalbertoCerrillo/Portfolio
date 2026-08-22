import './App.css';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Navbar from './components/navigation/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProjects from './components/projects/projects';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
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
