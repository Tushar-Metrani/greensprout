import './App.css';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import BookTable from './components/booktable.jsx';
import { useLocation } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { BrowserRouter,Route,Routes,Navigate } from "react-router";
import Status from './components/status.jsx';


function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  
  return (
    <>
      <BrowserRouter basename='/greensprout'>
      <ScrollToTop/>
      <Navbar logo="logo.png" l1="Home" l2="About" l3="Menu" l4="Book Table" l5="Contact"/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace/>}/>
      <Route path="/home" element={<Homepage/>} />
      <Route path="/booktable" element={<BookTable/>}/>
      <Route path="/booktable/status" element={<Status/>}/>
      {/* <Route path="*" element={<Navigate to="/home" replace/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
