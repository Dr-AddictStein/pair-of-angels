import React from 'react'

const Home = () => {
    return (
        <div className="bg-red-600 min-h-screen flex flex-col items-center justify-center text-white">
            <img src="/src/assets/images/your-logo.png" alt="Logo" className="mb-8" />
            <h1 className="text-4xl font-bold mb-4">Explore more uncensored content from beautiful women</h1>
            <p className="text-xl mb-6">Access a wider variety of premium uncensored content and products at a reduced cost!</p>
            <div className="flex space-x-4">
                <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Explore Now!</button>
                <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Our Services!</button>
            </div>
        </div>
    )
}

export default Home