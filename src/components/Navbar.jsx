import logo from "../assets/logo2.png"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {Link as Links} from "react-scroll";


export default function Navbar(props) {

    const {pathname} = useLocation();
    const [navDisplay, navToggle] = useState(false);
    //console.log(pathname);

    return (
        <>
            <div id="Navbar" className="flex items-center bg-white justify-between py-2 px-5 md:px-10 shadow-md md:justify-between sticky top-0 z-3 quicksand-font mozilla-headline">

                <div id="toggle" className="flex sm:hidden order-2 w-max h-max">
                    <button className="m-0 p-0" onClick={() => navToggle(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </button>
                </div>

                <div id="logo" className="w-35 md:w-2/11 lg:w-15/100">
                    <img src={logo}></img>
                </div>

                <div id="menu-links" className="text-gray-800 hidden flex-col items-center w-80 md:w-100 sm:flex-row sm:flex">

                    <Link to="/home?section=hero" className="hover:font-bold text-sm px-2 md:px-3 md:text-base w-max">{props.l1}</Link>

                    <Link to="/home?section=about" className="hover:font-bold text-sm px-2 md:px-3 md:text-base w-max">{props.l2}</Link>

                    <Link to="/home?section=menu" className="hover:font-bold text-sm px-2 md:px-3 md:text-base w-max">{props.l3}</Link>

                    <Link to="/booktable?section=bookTable-section" className="hover:font-bold text-sm px-2 md:px-3 md:text-base w-max">{props.l4}</Link>

                    <Links to="footer" smooth={true} className="hover:font-bold text-sm px-2 md:px-3 md:text-base w-max cursor-pointer">{props.l5}</Links>

                </div>

                <div id="sm-menu-links" className={`${navDisplay === false ? "hidden" : ""} text-gray-800 flex flex-row items-start fixed sm:hidden bg-gray-200 right-0 top-0 w-44 h-70 pb-2 pt-1`}>

                    <div className="flex flex-col items-left pb-2 pt-6">
                        <Link to="/home?section=hero" className="py-3 px-6 text-base">{props.l1}</Link>
                        <Link to="/home?section=about" className="py-3 px-6 text-base">{props.l2}</Link>
                        <Link to="/home?section=menu" className="py-3 px-6 text-base">{props.l3}</Link>
                        <Link to="/booktable?section=bookTable-section" className="py-3 px-6 text-base">{props.l4}</Link>
                        <Links to="footer" smooth={true} className="py-3 px-6 text-base cursor-pointer">{props.l5}</Links>
                    </div>
                    <button className="py-3 mr-5" onClick={() => navToggle(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>

                </div>

            </div>

        </>
    )
};