import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Pagination, Navigation } from 'swiper';

const About = () => {
    return (
        <div>
            <div className="bg-cover bg-center h-80 text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/pink2.png')" }}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Our Story</h1>
                    <p className="mt-4 text-lg">We are passionate about bringing you the best in fashion and technology.</p>
                </div>
            </div>

            <section className="py-16 max-w-[1300px] mx-auto">
                <h2 className="text-center text-3xl font-bold mb-10">Our Mission</h2>
                <p className='text-lg mb-32 text-center'>
                    At Trendify, we are dedicated to transforming the way people experience fashion and lifestyle. Our mission is simple: to offer premium-quality products that blend style, comfort, and affordability for every individual. We believe that fashion is not just about clothes but an expression of personality, and everyone deserves to feel confident in what they wear.
                </p>

                <div className="mt-10">
                    {/* First Image and Card */}
                    <div className="relative hover:cursor-pointer">
                        <img src="/images/modern.png" alt="" className='w-[900px] mx-auto' />
                        <div className="hidden lg:flex justify-center items-center py-8 absolute right-20 bottom-0">
                            <div className="max-w-sm rounded-lg overflow-hidden bg-white p-10 text-center shadow-xl shadow-black">
                                <div className="mb-4">
                                    <i className="fas fa-award text-5xl text-yellow-500"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Products</h3>
                                <p className="text-gray-600">
                                    At Trendify, we prioritize quality in every product we offer. From premium materials to impeccable craftsmanship, our items are designed to last. Whether it's clothing or electronics, trust us to deliver the best.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Responsive Card for First Image */}
                    <div className="lg:hidden flex justify-center items-center py-8">
                        <div className="max-w-sm rounded-lg overflow-hidden  bg-white p-10 text-center shadow-xl shadow-black">
                            <div className="mb-4">
                                <i className="fas fa-award text-5xl text-yellow-500"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Products</h3>
                            <p className="text-gray-600">
                                At Trendify, we prioritize quality in every product we offer. From premium materials to impeccable craftsmanship, our items are designed to last. Whether it's clothing or electronics, trust us to deliver the best.
                            </p>
                        </div>
                    </div>

                    {/* Second Image and Card */}
                    <div className="relative hover:cursor-pointer mt-32 lg:flex lg:flex-row">
                        <img src="/images/customers.png" alt="" className='w-[700px] h-[500px] mx-auto lg:ml-96' />
                        <div className="hidden lg:flex justify-center items-center py-8 absolute left-28 bottom-0">
                            <div className="max-w-sm rounded-lg overflow-hidden bg-white p-10 text-center shadow-xl shadow-black">
                                <div className="mb-4">
                                    <i className="fas fa-award text-5xl text-yellow-500"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Satisfaction</h3>
                                <p className="text-gray-600">
                                    At Trendify, customer satisfaction is our top priority. We go above and beyond to ensure that every shopping experience with us is seamless, enjoyable, and rewarding. From the moment you browse our collections to the time your order reaches your doorstep, we are committed to delivering excellence at every step.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Responsive Card for Second Image */}
                    <div className="lg:hidden flex justify-center items-center py-8 mt-8">
                        <div className="max-w-sm rounded-lg overflow-hidden bg-white p-10 text-center shadow-xl shadow-black">
                            <div className="mb-4">
                                <i className="fas fa-award text-5xl text-yellow-500"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Satisfaction</h3>
                            <p className="text-gray-600">
                                At Trendify, customer satisfaction is our top priority. We go above and beyond to ensure that every shopping experience with us is seamless, enjoyable, and rewarding. From the moment you browse our collections to the time your order reaches your doorstep, we are committed to delivering excellence at every step.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Customer Reviews  */}
            <section className="py-16">
                <h2 className="text-center text-3xl font-bold mb-10">What Our Customers Say</h2>
                <div className='max-w-[1300px] mx-auto p-10'>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="customer-reviews-swiper"
                    >
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <p className="text-gray-700 italic">"Amazing products and top-notch service! Highly recommend."</p>
                                <div className="mt-4 flex items-center">
                                    <img src="/images/cust1.jpg" alt="Customer" className="rounded-full w-10 h-10 mr-4" />
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">Sarah L.</h4>
                                        <p className="text-yellow-500">★★★★</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <p className="text-gray-700 italic">"Trendify makes shopping so easy! The website is user-friendly, and the customer service team was quick to answer my questions. I’m beyond happy with my purchase."</p>
                                <div className="mt-4 flex items-center">
                                    <img src="/images/cust2.jpg" alt="Customer" className="rounded-full w-10 h-10 mr-4" />
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">Daniel</h4>
                                        <p className="text-yellow-500">★★★★★</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <p className="text-gray-700 italic">"I was amazed by the quality of the clothes I ordered from Trendify. They fit perfectly and arrived even earlier than expected!"</p>
                                <div className="mt-4 flex items-center">
                                    <img src="/images/cust3.jpeg" alt="Customer" className="rounded-full w-10 h-10 mr-4" />
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">John D.</h4>
                                        <p className="text-yellow-500">★★★★</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <p className="text-gray-700 italic">"I was amazed by the quality of the clothes I ordered from Trendify. They fit perfectly and arrived even earlier than expected!"</p>
                                <div className="mt-4 flex items-center">
                                    <img src="/images/cust3.jpeg" alt="Customer" className="rounded-full w-10 h-10 mr-4" />
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">Rose</h4>
                                        <p className="text-yellow-500">★★★★</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <p className="text-gray-700 italic">"I was amazed by the quality of the clothes I ordered from Trendify. They fit perfectly and arrived even earlier than expected!"</p>
                                <div className="mt-4 flex items-center">
                                    <img src="/images/cust3.jpeg" alt="Customer" className="rounded-full w-10 h-10 mr-4" />
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">Jack D.</h4>
                                        <p className="text-yellow-500">★★★★</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="p-6 border rounded-lg shadow-lg">
                                <p className="text-gray-700 italic">"I was amazed by the quality of the clothes I ordered from Trendify. They fit perfectly and arrived even earlier than expected!"</p>
                                <div className="mt-4 flex items-center">
                                    <img src="/images/cust2.jpeg" alt="Customer" className="rounded-full w-10 h-10 mr-4" />
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">Rishabh</h4>
                                        <p className="text-yellow-500">★★★★</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default About;
