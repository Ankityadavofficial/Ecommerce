import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navigations = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="text-gray-600 body-font shadow-lg bg-white sticky top-0 z-10">
            <div className="container mx-auto sm:w-[1300px] flex flex-wrap p-3 flex-col md:flex-row items-center ">
                <div className='flex gap-52 justify-between'>
                    <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">Trendify</span>
                    </Link>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleSidebar} className="text-gray-900 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
                    {navigations.map((navigation, i) => (
                        <Link key={i} to={navigation.path} className="mr-5 hover:text-pink-700 hover:text-shadow-lg">
                            {navigation.name}
                        </Link>
                    ))}
                </nav>
                <Link to={'/cart'} className="hidden sm:block inline-flex items-center text-white bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0 py-2 px-4">
                    Go to Cart
                </Link>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleSidebar}
            ></div>
            <div
                className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleSidebar} className="text-gray-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col items-start p-4">
                    {navigations.map((navigation, i) => (
                        <Link key={i} to={navigation.path} className="mb-4 text-gray-900 hover:text-pink-700" onClick={toggleSidebar}>
                            {navigation.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
