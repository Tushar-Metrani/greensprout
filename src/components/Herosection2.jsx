import img from "../assets/vegan-dishes-4.png";
import { Link } from "react-router";

export default function HeroSection() {
    return (
        <>
            <div id="hero-section" style={{backgroundImage:`url(${img})`,backgroundSize: 'cover', backgroundPosition:'center'}} className="px-5  md:items-start flex-col text-center md:pr-10 md:h-80 pl-0 hidden lg:flex">

            
                <div id="text-bg" className="w-130 pl-10 h-150 xxl:bg-gray-900 xxl:[clip-path:polygon(0_0,75%_0,100%_100%,0_100%)] select-none z-2 relative">
        
                    
                
                <div id="title" className="flex flex-col text-3xl mt-15 mb-5 md:text-3xl mozilla-headline">
                <h1 className="text-gray-900 bg-white w-max h-max font-bold text-left">Plant-Based Goodness</h1>
                <h1 className="text-gray-900 bg-white w-max h-max font-bold">For Everyone</h1>
                </div>
                <p className="text-base text-gray-50 w-max quicksand-font text-left" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Fresh, flavorful, and cruelty-free meals crafted<br/>  to delight your taste buds.</p>

                

                <div id="action-btns" className="flex my-5 items-center mt-10">
                    <Link to="/home?section=menu" className="text-base text-white px-2 py-1 bg-green-800 quicksand-font hover:bg-green-600">View menu</Link>
                    <Link to="/bookTable" className="text-base text-white px-2 py-1 mx-5 bg-green-800 quicksand-font hover:bg-green-600">Book Table</Link>
                </div>
                </div>
                
            </div>
        </>
    );
}