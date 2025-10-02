import { useLocation } from "react-router-dom";
import useScrollToSection from "./useScrollToSection";
import HeroSection2 from "./Herosection2";
import HeroSection from "./Herosection";
import Aboutsection from "./aboutsection";
import Menu from "./Menu";
import Footer from "./footer";


const Homepage = () =>{
    const {pathname,search} = useLocation();
    const params = new URLSearchParams(search);
    const section = params.get('section');
    
    useScrollToSection(section,pathname);

    return(
        <>
        <div id="hero">{<><HeroSection2/> <HeroSection/></>}</div>
        <div id="about">{<Aboutsection/>}</div>
        <div id="menu">{<Menu/>}</div>
        <div id="footer">{<Footer/>}</div>
        </>
    );
};


export default Homepage;