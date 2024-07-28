import React from 'react'

const services = () => {
    return (
        <div className="bg-red-600 min-h-screen text-white">
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Our Services!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">1) Privacy and Security!</h2>
                        <p>Your privacy and security matters to us!</p>
                    </div>
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">2) Competitive Pricing!</h2>
                        <p>Stop paying for more money for less quality!</p>
                    </div>
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">3) No annoying Pop-Ups!</h2>
                        <p>Experience a smooth and secure browsing experience!</p>
                    </div>
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">4) Community Engagement!</h2>
                        <p>Enjoy a great experience with us today!</p>
                    </div>
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">5) Higher Quality Models!</h2>
                        <p>We only want to provide the highest of quality!</p>
                    </div>
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">6) Live Stream Services!</h2>
                        <p>Experience live streaming like never before as a member!</p>
                    </div>
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">7) Product Offers!</h2>
                        <p>Get your hands on some of the products!</p>
                    </div>
                    <div className="service-item p-4">
                        <h2 className="text-2xl font-bold mb-4">8) Positive User Experience!</h2>
                        <p>Enjoy a great experience as a member at PairofAngels!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services