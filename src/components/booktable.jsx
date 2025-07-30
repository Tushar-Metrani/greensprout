import Footer from "./footer"
import { useLocation } from "react-router-dom";
import useScrollToSection from "./useScrollToSection";

export default function BookTable(){
    const {pathname,search} = useLocation();
    const params = new URLSearchParams(search);
    const section = params.get('section');
    
    useScrollToSection(section,pathname);
    return(
        <>
        <div id="bookTable-section"className="flex flex-col items-center pt-5 pb-10 bg-green-100 quicksand-font">
             <h3 className="text-xl text-center mb-3 font-bold playfair-display-font">Book a Table</h3>
            <form action="https://table-booking-eiag.onrender.com/submit" method="POST" className="flex flex-col justify-center items-center">
                
                <div id="input-fields" className="flex flex-row flex-wrap justify-center lg:justify-between space-y-5">

                <div id="personal-details" className="flex flex-col px-6 sm:m-5 w-85 sm:w-100 md:w-118 space-y-3 bg-gray-900 py-7 sm:px-10 text-gray-100 rounded-md">
                    <h3 className="text-green-400 sm:text-lg">Personal Details: </h3>

                    <div className="flex flex-col space-y-3 text-gray-100 lg:relative lg:top-[30px] z-0">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" className="bg-white  text-gray-700 border-green-600 border-1 px-1" name="name" required/>

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" className="bg-white text-gray-700 border-green-600 border-1 px-1" name="email" required/>

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" className="bg-white text-gray-700 border-green-600 border-1 px-1" name="phone" required/>
                    </div>
                </div>

                <div id="booking-details" className="flex flex-col px-6 sm:m-5 w-85 sm:w-100 md:w-118 space-y-2 bg-gray-900 py-7 sm:px-10 text-gray-100 rounded-md">
                <h3 className="text-green-400 sm:text-lg">Booking Details: </h3>
                <label htmlFor="date">Reservation Date:</label>
                <input type="date" id="date" className="bg-white text-gray-700 border-green-600 border-1 px-1" name="date" required/>

                <label htmlFor="time">Reservation Time:</label>
                <input className="bg-white text-gray-700 border-green-600 border-1 px-1" type="time" id="time" name="time" required/>

                <label htmlFor="people">Number of Guests:</label>
                <input className="bg-white text-gray-700 border-green-600 border-1 px-1"type="number" id="people" name="people" min="1" required/>

                <label htmlFor="requests">Special Requests:</label>
                <textarea id="requests" className="bg-white text-gray-700 border-green-600 border-1 px-1 h-[80px] resize-none"name="requests" rows="3" cols="30" placeholder="Allergies, seating preferences, etc." ></textarea>
                </div>

                </div>

                <button type="submit" className="bg-green-700 text-white w-35 px-2 py-1 m-5 rounded-4xl text-lg border-green-300 border-3 hover:bg-green-500 hover:text-gray-900">Book Now</button>
            </form>
        </div>
        <div id="footer">
            <Footer/>
        </div>
        </>
    )
}