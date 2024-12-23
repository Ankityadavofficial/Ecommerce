import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ products = [] }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 max-w-[1300px] py-12 mx-auto">
                {/* <div className="flex flex-wrap -m-4 "> */}
                    {/* <div className='grid grid-cols-4 -m-4 gap-1'> */}
                    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3 -m-4 mx-auto sm:pl-10 xl:pl-0'>
                    {
                        products.map(
                            (product, i) => {
                                const { id, title, price, description, category, image,rating } = product;
                                return (
                                    <Link to={`/products/${id}`} key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full mt-9 shadow-lg rounded-xl border-pink-200 mb-4 cursor-pointer  hover:shadow-2xl hover:shadow-black min-w-[300px] min-h-[400px]  hover:scale-105 transition-all duration-300">
                                        <div className="block relative h-48 rounded overflow-hidden">
                                            <img
                                                alt={title}
                                                className="object-contain object-center w-full h-full block"
                                                src={image}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-pink-700 text-xs tracking-widest title-font mb-1 uppercase">
                                                {category}
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                {title}
                                            </h2>
                                            <div className='flex flex-row justify-between'>
                                                <div className="mt-7 text-md font-bold text-pink-700 border border-pink-700 px-2 rounded-lg"> $ {price}</div>
                                                <div className='font-bold text-pink-700 mt-7 flex flex-row items-center gap-1 '>
                                                    {rating.rate} <FaStar className='text-yellow-500'/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductCard;
