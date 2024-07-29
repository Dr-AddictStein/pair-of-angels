import React, { useState } from 'react'
import topbg from '../Assets/Contact Us!/Top Part (1).avif';
import logo from '../Assets/Our Services/Transparent Logo (2).png';
import bottombg from '../Assets/Contact Us!/Bottom Part Fade (1).png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/send-email', {
                ...formData
            });
            console.log('Email sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    return (
        <>
            <div
                className="h-[55vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url('${topbg}')` }}
            >
                <div className="w-full flex justify-center items-center">
                    <img src={logo} alt="" className='h-[24vh] pt-3' />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-center text-white text-8xl font-bold">
                        <h1>Contact us!</h1>
                    </div>
                    <div className="flex text-center justify-center text-white text-2xl font-semibold ">
                        <div className="max-w-2xl ">
                            <p>Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you! </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className=" bg-cover bg-center relative"
                style={{ backgroundImage: `url('${bottombg}')` }}
            >
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="p-8  w-full max-w-2xl">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-white text-lg  mb-2">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3  bg-white text-black"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="lastName" className="block text-white text-lg  mb-2">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-3  bg-white text-black"
                                placeholder="Your last name"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-white text-lg  mb-2">Your email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3  bg-white text-black"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-white text-lg  mb-2">Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3  bg-white text-black"
                                placeholder="Enter your message"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#c90202] text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-black w-[30%]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact