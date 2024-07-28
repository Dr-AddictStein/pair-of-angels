import React from 'react'

const Contact = () => {
    return (
        <div className="bg-red-600 min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us!</h1>
            <p className="text-xl mb-8 text-center">Feel free to contact us with any questions or concerns. We appreciate your interest and look forward to hearing from you!</p>
            <form className="w-full max-w-lg">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black" id="name" type="text" placeholder="Your name" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="last-name">
                        Last name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black" id="last-name" type="text" placeholder="Your last name" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Your email*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black" id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                        Message*
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black" id="message" placeholder="Enter your message" />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact