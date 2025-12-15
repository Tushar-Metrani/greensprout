import { useLocation } from "react-router";
import useScrollToSection from "./useScrollToSection";
import HeroSection from "./Herosection";
import Aboutsection from "./Aboutsection";
import Menu from "./Menu";
import Footer from "./Footer";


const Homepage = () =>{
    const {pathname,search} = useLocation();
    const params = new URLSearchParams(search);
    const section = params.get('section');
    
    useScrollToSection(section,pathname);

    return(
        <>
        <div id="hero">{<HeroSection/>}</div>
        <div id="about">{<Aboutsection/>}</div>
        <div id="menu">{<Menu/>}</div>
        <div id="footer">{<Footer/>}</div>
        </>
    );
};


export default Homepage;