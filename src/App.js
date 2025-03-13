
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
import Logins from './Pages/Logins';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import HomePages from './Components/Homepages/Homepages';
import ShopProvider, { ShopContext } from './Context/ShopContext';
import ManageIncome from './Pages/ManageIncome';
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    
   
      <div>
        <BrowserRouter> 
        <ShopProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/homes' element={<HomePages />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/manageincome' element={<ManageIncome/>}/>
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logins' element={<Logins />} />
            <Route path='register' element={<Register />} />
            <Route path='registerss' element={<Registerss />} />
            <Route path='/registers' element={<Registers />} ></Route>
          </Routes>
          </ShopProvider>
        </BrowserRouter>
      </div>
    

  );
}

export default App;
