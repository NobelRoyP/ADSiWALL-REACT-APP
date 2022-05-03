import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from './components/Contact';
import Admin from './components/add-form.html';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <a href="./components/add-form.html" className="btn btn-success">Add</a>
        </Routes>
        <Header />
      </Router>
    </div>
  );
}

export default App;
