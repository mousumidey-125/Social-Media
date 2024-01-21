import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes,Navigate} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post.js'

function App() {
  const isLoggedIn = localStorage.getItem('user') === 'user';
  return (
    <>
    
   <Routes>
   
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/post' element={<Post/>}></Route>
      <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />}/>
      
    </Routes>
    
    
    </>
  );
}

export default App;
