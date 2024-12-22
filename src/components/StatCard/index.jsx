import React from 'react'

const Stats = () => {
    return (
        <section className="text-gray-600 body-font select-none">
            <div className="container px-5 py-12 mx-auto max-w-[1300px]">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Empowering Global Shopping Experiences
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Discover the impact we’ve made across the globe, connecting thousands of satisfied customers with top-quality products. From growing downloads to millions of products sold, our presence is felt in numerous places worldwide. Join our journey as we continue to elevate the shopping experience for everyone, everywhere.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="p-4 " >
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[url(/images/pink1.png)] bg-left bg-center bg-cover hover:shadow-lg cursor-pointer hover:shadow-black transition hover:translate-x-2 duration-300">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-white w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 17l4 4 4-4m-4-5v9" />
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-white">
                                2.7K+
                            </h2>
                            <p className="leading-relaxed text-white">Downloads</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[url(/images/pink1.png)] bg-left bg-center bg-cover hover:shadow-lg cursor-pointer hover:shadow-black transition hover:translate-x-2 duration-300">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-white w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-white">
                                1.3K+
                            </h2>
                            <p className="leading-relaxed text-white">Customers</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[url(/images/pink1.png)] bg-left bg-center bg-cover hover:shadow-lg cursor-pointer hover:shadow-black transition hover:translate-x-2 duration-300">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-white w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 18v-6a9 9 0 0118 0v6" />
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-white">74K+</h2>
                            <p className="leading-relaxed text-white">Products Sold</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[url(/images/pink1.png)] bg-left bg-center bg-cover hover:shadow-lg cursor-pointer hover:shadow-black transition hover:translate-x-2 duration-300">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-white w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-white">46</h2>
                            <p className="leading-relaxed text-white">Places</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
