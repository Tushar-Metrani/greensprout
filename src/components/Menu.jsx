import menulist from '../assets/menu.json';
import{ useState } from "react";


export default function Menu() {

  const [expanded, setExpanded] = useState(() =>
    menulist.reduce((acc, _, i) => {
      acc[i] = i === 0;
      return acc;
    }, {})
  );

  const toggleCategory = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
}


    return (
        <div id="menu-section" className='flex flex-col lg:items-center py-6 quicksand-font bg-gradient-to-br from-green-50 via-green-200 to-green-300'>
            <div id="pagetitle" className=''>
                <h2 className='text-center text-2xl py-3 text-gray-900'>Menu</h2>
            </div>

            <div id="menulist" className="px-2 py-2 sm:px-20">
                {menulist.map((categories, key) =>
                    <div key={key} className='xl:w-[63rem]'>
                        <div id="category" className='flex justify-between items-center my-5 py-1 px-3 bg-gray-900'>
                            <h2 className='text-xl text-white'>{categories.category}</h2>
                            <button onClick={()=>toggleCategory(key)} className='cursor-pointer' aria-label='ToggleListButton'>
                                
                            {expanded[key] &&
                                (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                                    <path d="M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                                </svg>
                                )
                            }
                            {!expanded[key] &&(
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                                </svg>
                                    )}
                            </button>
                        </div>
                        {expanded[key] &&(
                        <div className="itemlist flex flex-col justify-center items-center">
                            {categories.items.map((item, key) =>
                                <div key={key} id="item" className="flex pr-1 py-0 sm:pr-2 md:pr-3 md:py-0 my-3 justify-between max-w-[100%] lg:max-w-[820px] items-center h-[90px] sm:h-max border-gray-300 border-0 xxl:border-2 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-50 rounded-md shadow-xl">

                                    <div className="item-img w-[90px] h-[90px] sm:w-[110px] sm:h-[100px] rounded-l-md">
                                        <img src={`/greensprout/images/output_images/${item?.image}`} alt={item?.name} loading="lazy" className='w-[90px] h-[90px] sm:w-[110px] sm:h-[100px] rounded-l-md'/>
                                    </div>

                                    <div id="text" className="flex flex-col w-50 sm:w-90 md:w-120 ml-3 sm:ml-5 md:ml-10 mx-2 justify-center">
                                        <h2 className='text-gray-900 text-[14px] md:text-base lg:text-lg'>{item.name}</h2>
                                        <p className='text-gray-700 text-[12px] md:text-sm sm:block sm:mt-1'>{item.description}</p>
                                    </div>

                                    <div id="price" className='text-green-800 text-sm md:text-base w-[60px] md:w-[100px] text-right'>
                                        <p>{item.price} $</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )

}