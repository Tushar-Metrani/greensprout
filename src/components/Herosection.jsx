import { Link } from "react-router";

export default function HeroSection() {
    return (
        <>
            <div id="hero-section" className="flex md:items-start flex-col text-center md:px-0 relative overflow-hidden h-70 sm:h-75 md:h-80 lg:h-90">

                <img src="/greensprout/images/vegan-dishes-4.webp" alt="heroimg" className="absolute w-full h-full object-cover sm:object-center z-0" fetchPriority="high" loading="eager"/>
            
                <div id="title" className="flex flex-col text-2xl mt-10 sm:mt-12 lg:mt-13 mb-5 md:text-3xl lg:text-4xl z-2 relative px-5 sm:px-8 md:px-12 lg:px-15">
                <h1 className="text-gray-900 bg-white w-max h-max font-bold text-left font-mono">Plant-Based Goodness</h1>
                <h1 className="text-gray-900 bg-white w-max h-max font-bold font-mono">For Everyone</h1>
                
                <p className="text-white text-sm sm:text-base md:text-lg text-left z-2 mt-3 text-wrap" >

                    Fresh, flavorful, and cruelty-free meals crafted<br/>to delight your taste buds.
                    
                </p>
                

                <div id="action-btns" className=" text-base md:text-lg flex my-5 items-center mt-10 md:mt-12 lg:mt-13 z-2 relative">

                    <Link to="/home?section=menu" className=" px-3 py-2 md:px-4 md:py-3 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br rounded-base text-center leading-5 rounded-md font-semibold shadow-md font-mono">View menu</Link>
                    
                    <Link to="/bookTable" className="px-3 py-2 md:px-4 md:py-3 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br rounded-base text-center leading-5 rounded-md font-semibold shadow-md font-mono ml-3 sm:ml-7">Book Table</Link>
                
                </div>
                </div>
            </div>
            
        </>
    );
}