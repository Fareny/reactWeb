import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Blog from "./pages/Blog";

import './styles/main.css'

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
