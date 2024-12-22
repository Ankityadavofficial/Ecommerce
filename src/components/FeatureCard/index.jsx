import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ cards = [] }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto w-full max-w-[1300px]">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">
                        ROOF PARTY POLAROID
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        Shop by Category
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6 bg-[url('/images/cat-pink3.png')] bg-center w-full max-w-[1200px] bg-cover">
                    {/* Category Title */}
                    <div className='w-full md:w-1/3 p-8 md:p-16 text-3xl md:text-4xl font-bold text-white relative
                    ' style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
                        <div className="absolute top-0 left-40  h-full sm:w-[2px] bg-white"></div>
                        <span>C</span><br />
                        <span>A</span><br />
                        <span>T</span><br />
                        <span>E</span><br />
                        <span>G</span><br />
                        <span>O</span><br />
                        <span>R</span><br />
                        <span>I</span><br />
                        <span>E</span><br />
                        <span>S</span>
                    </div>


                    {/* Cards  */}
                    <div className='w-full mt-8 md:mt-16 sm:pr-8  md:w-2/3 flex flex-col items-center md:items-start'>
                        {
                            cards.map((card, index) => (
                                <Link
                                    to={`/categories/${card}`}
                                    key={index}
                                    className="flex justify-end items-center mb-4 p-7 rounded-r-2xl hover:cursor-pointer border-r-0 border-t border-b border-gray-300 bg-gradient-to-r from-white to-pink-700 italic hover:scale-110 duration-300 transition 
                                                w-full sm:w-[200px] md:w-[500px] lg:w-[700px]"
                                >
                                    <span className="text-white font-medium text-right text-lg capitalize">{card || 'Example card'}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureCard;
