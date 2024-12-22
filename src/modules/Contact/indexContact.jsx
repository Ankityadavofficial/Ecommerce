import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-[1300px] mx-auto px-4">
                
                
                <h2 className="text-center text-3xl font-bold mb-10">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl cursor-pointer hover:shadow-black transition duration-300">
                        <div className="mb-4">
                            <div className="w-16 h-16 bg-pink-700 text-white flex justify-center items-center rounded-full mx-auto">
                                <FaPhone className='text-4xl'/>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Phone</h3>
                        <p className="text-gray-600">+91 734 567 890</p>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl cursor-pointer  hover:shadow-black transition duration-300">
                        <div className="mb-4">
                            <div className="w-16 h-16 bg-pink-700 text-white flex justify-center items-center rounded-full mx-auto">
                                <FaLocationDot  className='text-4xl'/>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Address</h3>
                        <p className="text-gray-600">123 Fashion St, Trendy City</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl cursor-pointer hover:shadow-black transition duration-300">
                        <div className="mb-4">
                            <div className="w-16 h-16 bg-pink-700 text-white flex justify-center items-center rounded-full mx-auto">
                                <MdEmail className='text-4xl'/>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-gray-600">contact@trendify.com</p>
                    </div>
                </div>

                {/* Contact Form */}
                <h2 className="text-center text-3xl font-bold mb-10">Contact Us</h2>
                <div className="bg-white rounded-lg shadow-lg shadow-black p-8 max-w-4xl mx-auto">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                                    placeholder="Your Phone Number"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                                    placeholder="Your Address"
                                />
                            </div>
                        </div>

                        {/* Message Box */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="6"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700 resize-none"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-pink-700 text-white py-3 px-6 rounded-full hover:bg--pink-700 transition duration-300 focus:outline-none hover:w-28 transition-all duration-700 hover:bg-pink-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
