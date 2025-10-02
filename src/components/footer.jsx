import logo from "../assets/logo-transparent-green-300.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-gray-900 text-white pt-10 pb-5">

      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:flex flex-wrap justify-center sm:justify-evenly">

        <div className="lg:flex items-center space-x-3 hidden">
          <img src={logo} alt="The Green Sprout" className="h-10 w-auto" />
        </div>

        <div className="text-sm lg:text-base">
          <h4 className="text-green-400 font-semibold mb-4">Contact Us</h4>
          <p className="mb-1"><b>The Green Sprout</b></p>
          <p className="mb-1">808 Tofu Lane <br/>Greenville, Earth 31415</p>
          <p className="mb-1">
            <a href="tel:+99 808 01010" className="text-green-300 hover:underline">+99 808 01010</a>
          </p>
          <p>
            <a href="mailto:hello@thegreensprout.com" className="text-green-300 hover:underline">thegreensproutcontact@gmail.com</a>
          </p>
        </div>

        <div className="text-sm lg:text-base">
          <h4 className="text-green-400 font-semibold mb-4">Opening Hours</h4>
          <p className="mb-1">Mon-Fri: 11:00 AM - 10:00 PM</p>
          <p className="">Sat-Sun: 9:00 AM - 11:00 PM</p>
        </div>

        <div className="flex flex-col quicksand-font text-sm lg:text-base">
          <h4 className="text-green-400 font-semibold mb-2">Quick Links</h4>

          <Link to="/home?section=hero" className="hover:text-green-300 p-1">Home</Link>

          <Link to="/home?section=about" className="hover:text-green-300 p-1">About</Link>

          <Link to="/home?section=menu" className="hover:text-green-300 p-1">Menu</Link>

          <Link to="/bookTable?section=bookTable-section" className="hover:text-green-300 p-1 ">Book table</Link>
        </div>

        <div>
          <h4 className="text-green-400 text-left sm:text-center text-sm lg:text-base font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-green-300 w-[24px] lg:w-[30px]">

            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.675V1.326C24 .6 23.4 0 22.675 0z"/></svg>
            
            </a>
            
            <a href="https://instagram.com" target="_blank" className="hover:text-green-300 w-[24px] lg:w-[30px]">
          
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.057 1.97.24 2.427.407.62.23 1.06.507 1.527.974.467.467.744.907.974 1.527.167.457.35 1.257.407 2.427.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.24 1.97-.407 2.427a4.515 4.515 0 0 1-.974 1.527 4.516 4.516 0 0 1-1.527.974c-.457.167-1.257.35-2.427.407-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.24-2.427-.407a4.518 4.518 0 0 1-1.527-.974 4.516 4.516 0 0 1-.974-1.527c-.167-.457-.35-1.257-.407-2.427-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.057-1.17.24-1.97.407-2.427.23-.62.507-1.06.974-1.527a4.514 4.514 0 0 1 1.527-.974c.457-.167 1.257-.35 2.427-.407 1.266-.058 1.65-.07 4.85-.07zm0-2.2C8.736 0 8.332.013 7.053.072 5.767.13 4.62.322 3.678.678 2.66 1.057 1.857 1.57 1.07 2.357.284 3.143-.23 3.946-.607 4.964c-.355.943-.548 2.09-.605 3.376C-.012 9.668 0 10.072 0 12c0 1.928-.012 2.332.07 3.61.058 1.286.25 2.433.605 3.376.377 1.018.89 1.821 1.677 2.607.786.786 1.59 1.3 2.607 1.677.943.355 2.09.548 3.376.605 1.278.059 1.682.07 3.61.07s2.332-.012 3.61-.07c1.286-.058 2.433-.25 3.376-.605 1.018-.377 1.821-.89 2.607-1.677.786-.786 1.3-1.59 1.677-2.607.355-.943.548-2.09.605-3.376.059-1.278.07-1.682.07-3.61s-.012-2.332-.07-3.61c-.058-1.286-.25-2.433-.605-3.376-.377-1.018-.89-1.821-1.677-2.607C21.145 1.57 20.341 1.057 19.324.678c-.943-.355-2.09-.548-3.376-.605C15.268.013 14.864 0 12 0zM12 5.838A6.162 6.162 0 1 0 18.162 12 6.163 6.163 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a4.003 4.003 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-green-300 w-[24px] lg:w-[30px]">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.99 9.99 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.723c-.951.56-2.005.965-3.127 1.184a4.918 4.918 0 0 0-8.384 4.482A13.965 13.965 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.665 2.475c0 1.71.87 3.213 2.19 4.096a4.904 4.904 0 0 1-2.229-.616v.063a4.926 4.926 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.937 4.937 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54 13.945 13.945 0 0 0 7.548 22c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 text-wrap">
        © 2025 The Green Sprout. All rights reserved.
      </div>
    </footer>

  )
}