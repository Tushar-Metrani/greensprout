import React from "react";
import heroimg from "../assets/image.png";
import { Link } from "react-router-dom";
import '../App.css';
export default function HeroSection() {
    return (
        <>
            <div id="hero-section" style={{backgroundImage:`url(${heroimg})`,backgroundSize: 'cover',}} className="px-5 flex  md:items-start flex-col text-center md:px-10 md:h-80 md:hidden">
                <div id="title" className="flex flex-col text-3xl mt-10 mb-5 md:text-5xl">
                <h1 className="text-white bg-gray-900 w-max h-max quicksand-font">The Green</h1>
                <h1 className="text-white bg-gray-900 w-max h-max quicksand-font">Sprout</h1>
                </div>
                <p className="text-base text-white bg-gray-900 w-max quicksand-font">Plant-Based Goodness for Everyone</p>

                

                <div id="action-btns" className="flex my-5 items-center mt-10 md:mt-15">
                    <Link to="/home?section=menu" className="text-base text-white px-2 py-1 bg-green-800 quicksand-font hover:bg-green-600">View menu</Link>
                    <Link to="/bookTable" className="text-base text-white px-2 py-1 mx-5 bg-green-800 quicksand-font hover:bg-green-600">Book Table</Link>
                </div>
            </div>
        </>
    );
}