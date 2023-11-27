import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { useContext } from 'react';
import { tokenAuthorisationContext } from './Contexts/TokenAuth';
function App() {
  const {isAuthorised, setIsAuthorised} = useContext(tokenAuthorisationContext)
  return (
    <div>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/register' element={<Auth register/>}/>
<Route path='/dashboard' element={isAuthorised?<Dashboard/>:<Home/>}/>
<Route path='/project' element={isAuthorised?<Project/>:<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
