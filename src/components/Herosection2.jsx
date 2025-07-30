import heroimg from "../assets/image.png";
import { Link } from "react-router";
import '../App.css';
export default function HeroSection() {
    return (
        <>
            <div id="hero-section" style={{backgroundImage:`url(${heroimg})`,backgroundSize: 'cover',}} className="px-5  md:items-start flex-col text-center md:pr-10 md:h-80 pl-0 hidden md:flex">

                <div id="text-bg" className="w-110 pl-10 h-200 bg-gray-900 [clip-path:polygon(0_0,75%_0,100%_100%,0_100%)] select-none">
                    
                
                <div id="title" className="flex flex-col text-3xl mt-10 mb-5 md:text-5xl">
                <h1 className="text-gray-900 bg-white w-max h-max quicksand-font font-bold">The Green</h1>
                <h1 className="text-gray-900 bg-white w-max h-max quicksand-font font-bold">Sprout</h1>
                </div>
                <p className="text-base text-gray-900 bg-white w-max quicksand-font">Plant-Based Goodness for Everyone</p>

                

                <div id="action-btns" className="flex my-5 items-center mt-10 md:mt-15">
                    <Link to="/home?section=menu" className="text-base text-white px-2 py-1 bg-green-800 quicksand-font hover:bg-green-600">View menu</Link>
                    <Link to="/bookTable" className="text-base text-white px-2 py-1 mx-5 bg-green-800 quicksand-font hover:bg-green-600">Book Table</Link>
                </div>
                </div>
                
            </div>
        </>
    );
}