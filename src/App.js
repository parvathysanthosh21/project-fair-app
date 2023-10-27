import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'
import Footer from './Components/Footer';
import Auth from './Components/Auth';
function App() {
  return (
    <div>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/register' element={<Auth register/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
