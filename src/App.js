import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Categories/Home";
import Contact from './components/Contact';
import AddPhoto from './components/AddPhoto';
import Youtube from './components/Categories/Youtube'
import Website from './components/Categories/Website'
import ShoppingSite from './components/Categories/ShoppingSite'
import Facebook from './components/Categories/Facebook'
import Twitter from './components/Categories/Twitter'
import Blog from './components/Categories/Blog'

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-photo" element={<AddPhoto />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/website" element={<Website />} />
          <Route path="/shoppingsite" element={<ShoppingSite />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Header />
      </Router>
    </div>
  );
}

export default App;
