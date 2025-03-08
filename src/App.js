
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Pages/Register';
import Registers from './Pages/Registers';
import Registerss from './Pages/Registerss';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import HomePage from './Components/Homepage/Homepage';
function App() {
  return (
    
     <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<Login />} />
          <Route path='register' element={<Register/>} />
          <Route path='registerss' element={<Registerss/>} />
          <Route path='/registers' element={<Registers />} ></Route>
        </Routes>
       </BrowserRouter>
    </div>
   
  );
}

export default App;
