import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Blog from "./pages/Blog";
import AdminPanel from './pages/AdminPanel';
import './styles/common.css';
import './styles/normalize.css';
import './styles/main.css';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
        <Route path='/blog' element={<Blog/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;