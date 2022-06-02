import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from './components/Contact';
import AddPhoto from './components/AddPhoto';
import Thanks from './components/Thanks';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/add-photo" element={<AddPhoto/>} />
          <Route path="/thanks" element={<Thanks/>} />
        </Routes>
        <Header/>
      </Router>
     <div className="copy-right-div">
        <p><i className="fa-regular fa-copyright"></i> 2022 Adsiwall. All Rights Reserved</p>
    </div>
    </div>
  );
}

export default App;
