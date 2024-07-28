import React from 'react';
import bg from '../Assets/Landing Page/try.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div 
            className="h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url('${bg}')` }}
        >
            <div className="absolute top-[35%] right-[15%] text-white leading-[70px]">
                <h2 className="text-[70px] font-bold mb-10">Explore more <br/> uncensored <br/> content from <br/> beautiful women</h2>
                <p className='leading-[30px] text-2xl font-bold'>Access a wider variety of premium<br/> uncensored content and products<br/> at a reduced cost!</p>
                <div className=" flex justify-start mt-6 gap-4">
                    <Link className='bg-[#b00000] rounded-full px-8 text-2xl font-bold py-3 hover:bg-black' to='/services'>Explore Now!</Link>
                    <Link className='bg-[#b00000] rounded-full px-8 text-2xl font-bold py-3 hover:bg-black' to='/services'>Our Services!</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
