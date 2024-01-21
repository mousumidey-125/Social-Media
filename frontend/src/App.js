import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
   
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>

   </Routes>
  );
}

export default App;
