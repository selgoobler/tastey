import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Wastey from './pages/Wastey';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tastey" element={<AboutMe />} />
          <Route path="/wastey" element={<Wastey />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
