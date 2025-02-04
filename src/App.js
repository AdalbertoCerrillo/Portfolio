import './App.css';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Navbar from './components/navigation/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProjects from './components/projects/projects';

function App() {
  return (
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
  );
}

export default App;
