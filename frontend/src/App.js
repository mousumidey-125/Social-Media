import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
   
   <Routes>
    <Route path="/" element={<Login/>}></Route>

   </Routes>
  );
}

export default App;
