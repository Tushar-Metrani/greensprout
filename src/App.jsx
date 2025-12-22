import './App.css';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import BookTable from './components/Booktable.jsx';
import { useLocation } from 'react-router-dom';
import { useState,useEffect} from 'react';
import { BrowserRouter,Route,Routes,Navigate } from "react-router";
import Status from './components/Status.jsx';


function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [serverReady,setServerReady] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        const controller = new AbortController();
        let mounted = true;

        (async () => {
            for (let i = 0; i< 3; i++) {  
            try{
                await fetch(`${API_URL}/wakeup`,{signal:controller.signal})
                if(mounted) setServerReady(true);
                return;
            }
            catch(err){
                if(err.name==="AbortError") return;

                await new Promise(r=>setTimeout(r,30000));
            }
        }
        })();
        return ()=> {
            mounted = false;
            controller.abort();
        };    

    },[]);
  
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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
