
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
import HomePage from './Pages/Homepage/Homepage';
import Logins from './Pages/Logins';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import HomePages from './Pages/Homepages/Homepages';
import ShopProvider, { ShopContext } from './Context/ShopContext';
import ManageIncome from './Pages/ManageIncome';
import ProfilePage from './Pages/ProfilePage';
import TenantManage from './Pages/TenantManage';
import ManageRoom from './Pages/ManageRoom';
import TermsUse from './Components/TermsUse/TermsUse';
import ManageInvoices from './Components/ManageInvoices/ManageInvoices';
import ContractManage from './Components/ContractManagement/ContractManagement';
import Profile from './Pages/Profile';
import NewsPage from './Components/NewPage/NewPage';
import Contract from './Components/Contract/Contract';
import PostNews from './Components/PostNews/PostNews';
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
            <Route path='/use' element={<TermsUse />} />
            <Route path='/postnew' element={<PostNews />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/manageincome' element={<ManageIncome/>}/>
            <Route path='/manageroom' element={<ManageRoom/>}/>
            <Route path='/tenantmanage' element={<TenantManage/>}/>
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/contracts' element={<Contract />} />
            <Route path='/profiles' element={<Profile />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/contract' element={<ContractManage/>} />
            <Route path='/invoices' element={<ManageInvoices />} />
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
