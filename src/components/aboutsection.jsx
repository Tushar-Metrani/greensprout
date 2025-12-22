import teamphoto from '../assets/Chefs_photo.webp';
export default function Aboutsection(){
    return(
        
        <div id="about-section" className="flex flex-wrap flex-col sm:flex-row justify-center items-center px-5 py-5 md:px-10 md:py-15 bg-gray-100 md:flex-nowrap quicksand-font">

        <h2 className="text-xl w-[100%] my-4 md:hidden md:text-2xl">About us</h2>

        <div id-="about-img" className="rounded-4xl">
            <img src={teamphoto} alt="Green Sprout team photo" fetchPriority="high" width="320px" className='rounded-2xl'/>
        </div>

        <div id="about-text" className='my-7 sm:mx-5 md:mx-10 sm:mr-0'>

          <h2 className='text-2xl hidden md:block md:text-2xl'>About us</h2>

        <p className='text-justify text-sm quicksand-font max-w-[580px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[700px] md:my-5 md:text-base'>
          Hello from the team at The Green Sprout! Our journey began with a simple idea: to create a space where people could enjoy incredibly tasty food that also happens to be vegan. We pour our hearts into every dish, from sourcing the freshest ingredients to crafting recipes that are both familiar and exciting. We want The Green Sprout to be more than just a restaurant; it's a place where you can feel good about what you're eating and enjoy a welcoming, community-focused atmosphere.
        </p>

        </div>
        
      </div>
    )
}