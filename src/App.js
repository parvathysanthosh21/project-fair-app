import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
