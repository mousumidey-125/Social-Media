import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>

    </Routes>
  );
}

export default App;
