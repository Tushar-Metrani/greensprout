
import heroimg from "../assets/vegan-dishes-4.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
            <div id="hero-section" style={{backgroundImage:`url(${heroimg})`,backgroundSize: 'cover',}} className="px-5 flex  md:items-start flex-col text-center md:px-10 md:h-80 lg:hidden">
            
                <div id="title" className="flex flex-col text-2xl mt-10 mb-5 md:text-3xl mozilla-headline z-2 relative">
                <h1 className="text-gray-900 bg-white w-max h-max font-bold text-left">Plant-Based Goodness</h1>
                <h1 className="text-gray-900 bg-white w-max h-max font-bold">For Everyone</h1>
                </div>
                <p className="text-sm text-white w-max quicksand-font text-left z-2" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Fresh, flavorful, and cruelty-free meals crafted<br/>  to delight your taste buds.</p>

                

                <div id="action-btns" className="flex my-5 items-center mt-10 z-2 relative">
                    <Link to="/home?section=menu" className="text-base text-white px-2 py-1 bg-green-800 quicksand-font hover:bg-green-600">View menu</Link>
                    <Link to="/bookTable" className="text-base text-white px-2 py-1 mx-5 bg-green-800 quicksand-font hover:bg-green-600">Book Table</Link>
                </div>
            </div>
            
        </>
    );
}