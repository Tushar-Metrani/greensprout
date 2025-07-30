import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Status() {
    const [countdown, setCountdown] = useState(10); // starts at 10 seconds
    const navigate = useNavigate();

    useEffect(() => {
        // Countdown timer
        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        // Redirect after 10 seconds
        const timeout = setTimeout(() => {
            navigate('/bookTable'); // change to your destination
        }, 11000);

        // Cleanup both timers on unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate]);
    return (
        <div id="section" className="flex justify-center flex-col items-center h-[500px] space-y-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="84px" viewBox="0 -960 960 960" width="84px" fill="#48752C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            <h2 className="sm:text-xl">Congratulations Booking Successfull!</h2>
            <p className="sm:text-lg">Check Your Mailbox For more details</p>
            <p className="sm:text-base text-gray-500">Redirecting automatically in {countdown} second{countdown !== 1 ? 's' : ''}...</p>
        </div>
    )
}