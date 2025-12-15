import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';


export default function Status() {
    const [countdown, setCountdown] = useState(30);
    const navigate = useNavigate();
    const location = useLocation();
    const status = location.state?.status;
    const message = location.state?.message;

    useEffect(() => {
        if(countdown<=0){
            navigate('/bookTable');
        }

        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);


        return () => {clearInterval(interval);};

    }, [countdown,navigate]);
    return (
        <div className="flex justify-center items-center flex-col h-[calc(100vh-100px)] mt-5">

        <div id="success-section" className={`flex justify-center flex-col items-center space-y-3 text-center bg-green-100 max-w-lg h-max p-4 sm:p-10 rounded-2xl shadow-md m-5 sm:m-0 ${status==="failure"?"hidden":""}`}>

            <svg xmlns="http://www.w3.org/2000/svg" height="84px" viewBox="0 -960 960 960" width="84px" fill="#48752C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            <h2 className="sm:text-xl text-center">Congratulations Booking Successfull !</h2>
            <p className="text-sm sm:text-lg text-center">Your Booking ID is <b>{message}</b></p>
            <p className="text-[13px] sm:text-lg text-center text-green-700">Check your email for more details.</p>
            <p className="text-xs sm:text-base text-gray-500 text-center">Redirecting automatically in {countdown} second{countdown !== 1 ? 's' : ''}...</p>
        </div>

        <div id="fail-section" className={`flex justify-center flex-col items-center space-y-3 bg-red-100 max-w-lg h-max p-4 sm:p-10 rounded-2xl shadow-md m-5 sm:m-0 ${status==="success"?"hidden":""}`}>

            <svg xmlns="http://www.w3.org/2000/svg" height="84px" viewBox="0 -960 960 960" width="84px" fill="#BB271A"><path d="M330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm36-190 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56Zm-2 110h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"/></svg>

            <h2 className="text-base sm:text-xl text-center">
                Booking Failed, 
                <span className="block sm:inline"> Please Try Again after some time.</span>
            </h2>

            <p className="text-sm sm:text-base text-center text-red-500 text-wrap">
               {message}
            </p>
            <p className="text-[13px] sm:text-base text-center ">
                
            If the issue persists Email us on 
            
            <span className="block sm:inline">
            <a href="mailto:thegreensproutcontact@gmail.com" className='text-green-900 underline'> 	thegreensproutcontact@gmail.com</a>
            </span>

            </p>
            <p className="text-xs sm:text-base text-gray-500 text-center text-wrap">
                Redirecting automatically in {countdown} second{countdown !== 1 ? 's' : ''}...
            </p>
        </div>
        </div>
    )
}