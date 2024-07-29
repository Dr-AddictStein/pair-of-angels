import React from 'react'
import topbg from '../Assets/Our Services/Top Part.avif';
import logo from '../Assets/Our Services/Transparent Logo (2).png';
import img1 from '../Assets/Our Services/Our Services Phone.png'
import img2 from '../Assets/Our Services/Competitive Pricing.png'
import img3 from '../Assets/Our Services/No Annoying Pop-ups.png'
import img4 from '../Assets/Our Services/Community Engagement.png'
import img5 from '../Assets/Our Services/Higher Quality Model.png'
import img6 from '../Assets/Our Services/Live Stream Services.png'
import img7 from '../Assets/Our Services/product.avif'
import img8 from '../Assets/Our Services/Positive User Experience.png'
import oscompbg from '../Assets/Our Services/Our Services Border.png'
import priv from '../Assets/Our Services/Privacy and Security.png'
import cash from '../Assets/Our Services/Cash Logo.png'
import cc from '../Assets/Our Services/Competitive Commission.png'
import mic from '../Assets/Our Services/Community Engagement - Copy.png'
import bottombg from '../Assets/Our Services/Bottom Part Fade.png'
import { Link } from 'react-router-dom';




const services = () => {
    return (
        <>
            <div
                className="h-[70vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url('${topbg}')` }}
            >
                <div className="w-full flex justify-center items-center">
                    <img src={logo} alt="" className='h-[24vh] pt-3' />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-center text-white text-8xl font-bold">
                        <h1>Our Services!</h1>
                    </div>
                    <div className="text-center text-white text-3xl font-bold font-edu-hand">
                        <h4>For our valued members </h4>
                    </div>
                    <div className="flex text-center justify-center text-white text-2xl font-bold ">
                        <div className="max-w-3xl">
                            <p>At Pairofangels, we’re dedicated to providing unparalleled value to our members at every turn. Our commitment goes beyond merely satisfying desires; it’s about enriching lives through an extraordinary blend of premium content, innovative features, and personalised experiences. Read below for more information of some of the values we provide to our premium members.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[15vh] bg-gradient-to-b from-[#c90202] to-[#b60302]"></div>
            <div className="bg-[#b60302] pb-10 ">
                <div className="container mx-auto max-w-[1200px] flex justify-center text-white">
                    <div className="flex flex-col gap-24">
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>1) Privacy and Security!</h4>
                                    <h3 className='text-2xl font-bold'>Your privacy and security matters to us!</h3>
                                    <p className='text-2xl '>At PairofAngels, your privacy and security are our top priorities whether you're a valued member or perhaps one of our valued content creators. We understand that financial security and overall discretion is paramount when it comes to enjoying or producing adult content, which is why we’ve implemented state-of-the-art security measures to safeguard your information. Our goal is to protect your financial information and your overall identity while using our platform!</p>
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex justify-end">
                                    <img src={img1} alt="" className='w-[60%]' />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex justify-start">
                                    <img src={img2} alt="" className='w-[80%] ' />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>2) Competitive Pricing! </h4>
                                    <h3 className='text-2xl font-bold'>Stop paying for more money for less quality!</h3>
                                    <p className='text-2xl '>Here at PairofAngels, we understand the value of your entertainment budget. That’s why we pride ourselves on offering competitive pricing without compromising on quality content. We believe that everyone deserves access to premium adult entertainment without breaking the bank. There isn’t another platform that compete against our pricing!</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>
                                        3) No annoying Pop-Ups!</h4>
                                    <h3 className='text-2xl font-bold'>Experience a smooth and secure browsing experience!</h3>
                                    <p className='text-2xl '>At PairofAngels, we value your browsing experience above all else. We recognize the inconveniences associated with adult content on other sites, which is why we ensure our members enjoy a forced ad-free experience without any intrusive pop-ups or redirects. Discover a premium adult website where your experience is free from malware, annoying pop-ups, or forced advertisements. Enjoy smooth and secure browsing tailored for our members' satisfaction.</p>
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex justify-end">
                                    <img src={img3} alt="" className='w-[85%]' />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex justify-start">
                                    <img src={img4} alt="" className='w-[80%] ' />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>4) Community Engagement! </h4>
                                    <h3 className='text-2xl font-bold'>Enjoy a great experience with us today!</h3>
                                    <p className='text-2xl '>At PairofAngels, we’re more than just a platform for adult content – we’re a vibrant community where members come together to connect, explore, and indulge in their passions with our models, our moderators as well as fellow members of PairofAngels! Our commitment to fostering a welcoming and engaging environment sets us apart in the industry!</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>5) Higher Quality Models!</h4>
                                    <h3 className='text-2xl font-bold'>We only want to provide you the highest of quality!</h3>
                                    <p className='text-2xl '>At PairofAngels, we strongly believe that quality is paramount, especially when it comes to our angels. That’s why we’re committed to featuring only the most beautiful and professional individuals in the industry. Our rigorous selection process ensures that every angel we showcase possesses not only physical beauty but also charisma, charm, and a genuine passion for their work!</p>
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex justify-end">
                                    <img src={img5} alt="" className='w-[85%]' />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex justify-start">
                                    <img src={img6} alt="" className='w-[90%] ' />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>6) Live Stream Services!</h4>
                                    <h3 className='text-2xl font-bold'>Experience live streaming like never before as a member!</h3>
                                    <p className='text-2xl '>At PairofAngels, we understand our members crave a live experience. Which is why we offer an unparalleled experience for those seeking intimate encounters and thrilling live performances. With our diverse range of angels and performers, members can indulge in their wildest fantasies live and direct from the comfort of their own homes. We offer high-quality streaming services, allowing members to connect with our beautiful angels in real-time by joining a public live stream or perhaps a private show while enjoying exclusive content tailored to their preferences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>
                                        7) Product Offers!</h4>
                                    <h3 className='text-2xl font-bold'>Get your hands on some of the products!</h3>
                                    <p className='text-2xl '>We understand that our beloved members crave more than just digital content. That’s why we take great pride in offering a curated selection of merchandise and even products worn by our stunning angels featured on our platform. We believe that every purchase should be an unforgettable experience, a chance to elevate yourself in the world of pleasure and indulgence!</p>
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex justify-end">
                                    <img src={img7} alt="" className='w-[95%]' />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex justify-start">
                                    <img src={img8} alt="" className='w-[90%] ' />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="flex gap-5 flex-col mt-5">
                                    <h4 className='text-4xl font-bold'>8) Positive User Experience!</h4>
                                    <h3 className='text-2xl font-bold'>Enjoy a great experience as a member at PairofAngels!</h3>
                                    <p className='text-2xl '>From the moment you land on our site, you’ll be greeted by a sleek, user-friendly and technologically advanced interface designed to make finding your favourite content as well as new content very easy! Our advanced search and filtering options ensure that you can quickly discover exactly what you’re looking for, whether it’s a specific angel, category, or fetish!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full bg-[#9e090e] flex justify-center">
                <img src={oscompbg} alt="" />
            </div>

            <div className="bg-[#b60302] py-10 ">
                <div className="container mx-auto max-w-[1200px] flex justify-center text-white">
                    <div className="flex flex-col gap-24">
                        <div className="grid grid-cols-10">
                            <div className="col-span-5">
                                <div className="flex justify-end pt-20">
                                    <img src={priv} alt="" className='' />
                                </div>
                            </div>
                            <div className="col-span-5 flex flex-col gap-6">
                                <div className="">
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center">
                                            <img src={cash} alt="" className='w-[50px]' />
                                        </div>
                                        <div className="col-span-4">
                                            <h4 className='text-2xl font-bold text-center bg-opacity-25 bg-black py-2'>1) Privacy and Security!</h4>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-1">

                                        </div>
                                        <div className="col-span-4 bg-opacity-25 bg-black">
                                            <p className='text-xl p-4 text-center '>Creators and agencies alike can set their desired pricing, accept in-chat tokens, and sell physical, live streams, digital products, etc... via built-in storefronts here at Pairofangels!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center">
                                            <img src={cc} alt="" className='w-[50px]' />
                                        </div>
                                        <div className="col-span-4">
                                            <h4 className='text-2xl font-bold text-center bg-opacity-25 bg-black py-2'>2) Competitive Commission!</h4>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-1">

                                        </div>
                                        <div className="col-span-4 bg-opacity-25 bg-black">
                                            <p className='text-xl p-4 text-center '>Here at Pairofangels we want to take care of our content creators! Our adult content website offers content creators an 85% commission for their digital content, a highly competitive rate compared to other platforms!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center">
                                            <img src={mic} alt="" className='w-[50px]' />
                                        </div>
                                        <div className="col-span-4">
                                            <h4 className='text-2xl font-bold text-center bg-opacity-25 bg-black py-2'>2) Competitive Commission!</h4>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-1">

                                        </div>
                                        <div className="col-span-4 bg-opacity-25 bg-black">
                                            <p className='text-xl p-4 text-center '>Here at Pairofangels we want to take care of our content creators! Our adult content website offers content creators an 85% commission for their digital content, a highly competitive rate compared to other platforms!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-[#b60302] py-16 flex justify-center text-white">
                <div className="max-w-[1200px]">
                    <div className="text-center text-white text-8xl font-bold mb-16">
                        <h1 className='text-center'>Explore With Us Today!</h1>
                    </div>
                    <div className="flex w-full justify-around gap-10">
                        <div className="flex flex-col justify-center item-center w-1/2">
                            <h4 className='text-2xl font-bold text-center  py-2'>Get started today and join our angels!</h4>
                            <div className="flex justify-center pt-6">
                                <Link className='bg-white rounded-full px-6 py-3 text-2xl font-bold text-[#9C080A] hover:bg-black hover:text-white transition duration-200 w-[40%] text-center' to='/services'>
                                    Explore Now!
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center item-center w-1/2">
                            <h4 className='text-2xl font-bold text-center  py-2'>Have any questions? Contact us!</h4>
                            <div className="flex justify-center pt-6">
                                <Link className='bg-white rounded-full px-6 py-3 text-2xl font-bold text-[#9C080A] hover:bg-black hover:text-white transition duration-200 w-[40%] text-center' to="/contact-us">
                                    Contact Us!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[45vh]  bg-cover bg-center relative pt-16"
                style={{ backgroundImage: `url('${bottombg}')` }}
            >
                <div className="flex justify-center items-center">
                    <div className="">
                        <div className="text-center text-white text-5xl font-bold mb-6">
                            <h1 className='text-center'>Subscribe to our newsletter</h1>
                        </div>
                        <div className="text-center text-white text-lg mb-6">
                            <h1 className='text-center'>Enjoy exclusive special deals available only to our subscribers!</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="p-2 rounded-lg bg-white text-black w-full max-w-md"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="flex justify-center pt-6">
                            <Link className='bg-[#b60302] rounded-full px-6 py-3 text-xl   hover:bg-black text-white transition duration-200 w-[40%] text-center' to='/services'>
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default services