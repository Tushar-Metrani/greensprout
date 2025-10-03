import Footer from "./footer"
import { useLocation } from "react-router-dom";
import useScrollToSection from "./useScrollToSection";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useEffect } from "react";
import loading from "../assets/wave_loading.gif"
export default function BookTable() {

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        fetch(`${API_URL}/wakeup`)
        .catch(er=>{console.error("server did not respond",er)});
    },[]);
   


    const { pathname, search } = useLocation();
    const params = new URLSearchParams(search);
    const section = params.get('section');
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);

    useScrollToSection(section, pathname);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        requests: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone must be 10 digits.';
        }

        if (!formData.date) newErrors.date = 'Date is required.';
        if (!formData.time) newErrors.time = 'Time is required.';
        if (!formData.people || parseInt(formData.people) < 1) {
            newErrors.people = 'At least 1 person is required.';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/submit`, {
                method: 'POST',
                body: new URLSearchParams(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const data = await response.json();

            if (response.ok) {
                //alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    people: '',
                    requests: '',
                });
                navigate("/booktable/status",{state:{status:data.status,message:data.message}});
            } 
            else {
                //alert('Submission failed.');
                navigate("/booktable/status",{state:{
                    status:data.status,
                    message:`Booking failed. Server responded with status ${data.message}.`
                }});
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            //alert('An error occurred.');
            navigate("/booktable/status",{state:{
                status:"failure",
                message:"Booking failed due to a network or server error."
            }});
        }
    };


    return (
        <>
            { !isLoading && (<>
            <div id="bookTable-section" className="flex flex-col items-center pt-5 pb-10 bg-gradient-to-r from-green-100 via-green-200 to-green-300 quicksand-font">
                <h3 className="text-xl text-center mb-3 font-bold mozilla-headline">Book a Table</h3>
                <form id="booking-form" onSubmit={handleSubmit} className="flex flex-col justify-center items-center" noValidate>

                    <div id="input-fields" className="flex flex-row flex-wrap justify-center lg:justify-between space-y-5">

                        <div id="personal-details" className="flex flex-col px-6 sm:m-5 w-85 sm:w-100 md:w-118 space-y-3 bg-gray-900 py-7 sm:px-10 text-gray-100 rounded-md">
                            <h3 className="text-green-400 sm:text-lg">Personal Details: </h3>

                            <div className="flex flex-col space-y-3 text-gray-100 lg:relative lg:top-[30px] z-0">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" id="name" className="bg-white  text-gray-700 border-green-600 border-1 px-1" name="name" value={formData.name} onChange={handleChange} required />
                                {errors.name && <div className="error">{errors.name}</div>}

                                <label htmlFor="email">Email Address:</label>
                                <input type="email" id="email" className="bg-white text-gray-700 border-green-600 border-1 px-1" name="email" value={formData.email} onChange={handleChange} required />
                                {errors.email && <div className="error">{errors.email}</div>}

                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" id="phone" className="bg-white text-gray-700 border-green-600 border-1 px-1" name="phone" value={formData.phone} onChange={handleChange} required />
                                {errors.phone && <div className="error">{errors.phone}</div>}
                            </div>
                        </div>

                        <div id="booking-details" className="flex flex-col px-6 sm:m-5 w-85 sm:w-100 md:w-118 space-y-2 bg-gray-900 py-7 sm:px-10 text-gray-100 rounded-md">
                            <h3 className="text-green-400 sm:text-lg">Booking Details: </h3>
                            <label htmlFor="date">Reservation Date:</label>
                            <input type="date" id="date" className="bg-white text-gray-700 border-green-600 border-1 px-1" name="date" value={formData.date} onChange={handleChange} required />
                            {errors.date && <div className="error">{errors.date}</div>}

                            <label htmlFor="time">Reservation Time:</label>
                            <input className="bg-white text-gray-700 border-green-600 border-1 px-1" type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                            {errors.time && <div className="error">{errors.time}</div>}

                            <label htmlFor="people">Number of Guests:</label>
                            <input className="bg-white text-gray-700 border-green-600 border-1 px-1" type="number" id="people" name="people" min="1" value={formData.people} onChange={handleChange} required />
                            {errors.people && <div className="error">{errors.people}</div>}

                            <label htmlFor="requests">Special Requests:</label>
                            <textarea id="requests" className="bg-white text-gray-700 border-green-600 border-1 px-1 h-[80px] resize-none" name="requests" rows="3" cols="30" value={formData.requests} onChange={handleChange}placeholder="Allergies, seating preferences, etc." ></textarea>
                        </div>

                    </div>

                    <button type="submit" className="bg-green-700 text-white w-35 px-2 py-1 m-5 rounded-4xl text-lg border-green-300 border-3 hover:bg-green-500 hover:text-gray-900">Book Now</button>
                </form>
                
            </div>
            
            <div id="footer" className="">
                <Footer />
            </div>
            
            </>)}
            {isLoading && (
            <div id="loading" className="flex justify-center items-center min-h-[calc(100vh-100px)]">
                <img src={loading} alt="loading" className="w-40"/>
            </div>
            )}
        </>
    )
}