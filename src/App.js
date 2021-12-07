import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Myworks from './pages/Myworks';

function App() {
  return (
    <Router>
      <Navbar/>     
      <Routes>      
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        {/* <Route exact path="/resume" element={<Resume/>}></Route> */}
        <Route exact path="/myworks" element={<Myworks/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
