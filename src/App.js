import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main';
import Home from './pages/home/home';
import Sigin from './pages/sig-in/sigin';
import Login from './pages/log-in/login';
import SetLocation from './pages/set-location/set-location';
import Reset from './pages/reset-password';
import RequestReset from './pages/request-reset';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sigin' element={<Sigin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adm/home' element ={<Home />} />
        <Route path='/adm/set-location' element ={<SetLocation />} />
        <Route path='/admin/request-reset-email' element = {<RequestReset />} />
        <Route path='/adm/reset-password' element ={<Reset />} />

      </Routes>
    </BrowserRouter>
  );
}     

export default App;
