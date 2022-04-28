import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from './components/Contact';
import Admin from './components/Admin';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin-nobel-roy-p" element={<Admin/>} />
        </Routes>
      </Router>
      <Header />
    </div>
  );
}

export default App;
