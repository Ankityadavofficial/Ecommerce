import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Install modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = () => {
    return (
        <section className="text-gray-600 body-font select-none">
            <div className="container mx-auto md:gap-28 lg:gap-12 flex flex-col  md:flex-row   gap-10  px-5 py-24 max-w-[1400px] bg-[url('/images/LandingPage.png')] bg-no-repeat bg-cover">
                    <div className="flex-shrink-0 w-1/4 md:w-1/3 lg:w-1/4 p-2 lg:pr-24 md:pr-16 flex  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-6xl mb-2 font-medium text-white">
                        <span style={{ fontFamily: "'Cinzel Decorative', cursive" }} className='text-6xl text-pink-300 mt-20 mb-0 block '>Style, </span>
                        <div className='text-pink-200 mt-3 mb-3' style={{ fontFamily: "'Cinzel Decorative', cursive" }}> Tech, </div>
                        <div style={{ fontFamily: "'Cinzel Decorative', cursive" }} className='text-6xl text-pink-100 mt-3'>& Elegance </div>
                        <div className='text-sm hidden lg:inline-block mt-4'>All in One Place</div>
                    </h1>
                </div>
                <div className="lg:w-[70%] md:w-1/2 w-full ">

                    <Swiper
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500, 
                            disableOnInteraction: false, 
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 9,
                            },
                        }}
                        className="mySwiper"
                        style={{ width: '100%', height: '500px' }} 
                    >
                        <SwiperSlide>
                            <img src="/images/Forever21.png" alt="Slide 1" className="object-cover object-center rounded w-full lg-w[890px] h-full border border-pink-200 bg-center" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/sony.png" alt="Slide 2" className="object-cover object-center rounded w-full h-full border border-pink-200" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/zara.png" alt="Slide 3" className="object-cover object-center rounded w-full h-full border border-pink-200" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/gold.png" alt="Slide 4" className="object-cover object-center rounded w-full h-full border border-pink-200" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/Bulgari.png" alt="Slide 5" className="object-cover object-center rounded w-full h-full border border-pink-200 bg-center" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/Prada.png" alt="Slide 6" className="object-cover object-center rounded w-full h-full border border-pink-200 bg-center" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/earbuds.png" alt="Slide 7" className="object-cover object-center rounded w-full h-full border border-pink-200" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/Louis.png" alt="Slide 8" className="object-cover object-center rounded w-full h-full border border-pink-200" />
                        </SwiperSlide>

                        <div className="swiper-button-prev swiper-button-custom bg-pink-500 text-white rounded-full"></div>
                        <div className="swiper-button-next swiper-button-custom bg-pink-500 text-white rounded-full"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hero;


