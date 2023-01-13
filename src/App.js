import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutPage from './components/AboutPage'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import OrderOnline from './components/OrderOnline'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/orderonline" element={<OrderOnline/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  );
}

export default App;
