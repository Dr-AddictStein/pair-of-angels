import React from 'react';
import bg from '../Assets/Landing Page/try.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div 
            className="h-screen bg-cover bg-center relative" 
            style={{ backgroundImage: `url('${bg}')` }}
        >
            <div className="absolute top-[20%] right-[5%] md:top-[35%] md:right-[0%] lg:top-[35%] lg:right-[0%] xl:right-[5%] 2xl:right-[15%] text-white leading-[1.2] md:leading-[1.4] lg:leading-[1.6]">
                <h2 className="text-3xl md:text-5xl lg:text-[60px] xl:text-[70px] font-bold mb-6 md:mb-8 lg:mb-10">
                    Explore more <br/> uncensored <br/> content from <br/> beautiful women
                </h2>
                <p className='leading-[1.4] text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 lg:mb-8'>
                    Access a wider variety of premium<br/> uncensored content and products<br/> at a reduced cost!
                </p>
                <div className="flex flex-col md:flex-row justify-start mt-4 md:mt-6 lg:mt-8 gap-4">
                    <Link className='bg-[#b00000] rounded-full px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl lg:text-2xl font-bold hover:bg-black' to='/services'>
                        Explore Now!
                    </Link>
                    <Link className='bg-[#b00000] rounded-full px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl lg:text-2xl font-bold hover:bg-black' to='/services'>
                        Our Services!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
