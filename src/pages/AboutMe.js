import React, { useEffect } from 'react';
import Header from '../components/Header';
import logo from '../images/logo.png';

export default function AboutMe() {
    useEffect(() => {
        document.title = 'Ryo K Inciong';
    }, []);

    let day = new Date();
    let year = day.getFullYear();

    return (
        <div className="font-montserrat relative w-screen">
            <Header />
            <div className="bg-blue-primary absolute top-0 w-1/4 h-screen z-50 flex">
                <p className="font-monoton text-gray-primary text-6xl sm:text-8xl transform -rotate-90 origin-bottom-left absolute left-full bottom-0 pl-4">
                    Welcome
                </p>
            </div>
            <div className="relative h-screen ">
                <div className="sticky bg-red-primary text-gray-primary top-1/3 right-0 w-screen h-1/2 flex items-end">
                    <div className="w-screen p-1 sm:p-4">
                        <h1 className="text-right text-lg sm:text-4xl w-3/4 ml-auto">RYO KAGAYA INCIONG</h1>
                        <h6 className="text-right text-sm sm:text-xl w-3/4 ml-auto">
                            Happy to design, draw, web-develop for you!
                        </h6>
                    </div>
                </div>
            </div>
            <div className="flex justify-end relative">
                <div className="mt-60 mb-0 sm:mb-60 relative h-screen overflow-x-hidden w-11/12 sm:w-4/5">
                    <div
                        className="absolute bg-gray-primary rounded-full top-0 -right-20 w-full"
                        style={{ paddingTop: '100%' }}
                    >
                        <div className="absolute top-1/3 -left-20 w-1/2">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="absolute top-1/3 sm:top-1/2 right-24 text-black-primary text-xs lg:text-lg sm:text-base">
                            <p className="text-right">Japanese nerd living in LA</p>
                            <br />
                            <p className="text-right">Website Development</p>
                            <p className="text-right">Web Design</p>
                            <p className="text-right">Illustration</p>
                            <p className="text-right">Graphic Design</p>
                            <p className="text-right">Translation...</p>
                            <br />
                            <p className="text-right">Ask me anything!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="" className="pt-0 h-screen relative w-screen">
                <div className="sticky top-20 bg-red-primary w-8/12 md:w-5/12 h-32 flex items-center justify-end z-30 rounded-r-sm">
                    <p className="text-gray-primary text-base sm:text-xl font-bold pr-2 sm:pr-4">
                        Feel Free to Contact Me
                    </p>
                </div>
                <div
                    id="contact"
                    className="sticky bg-blue-primary left-full top-40 w-9/12 z-10 py-16 pl-2 sm:pl-12 text-base sm:text-lg text-gray-primary rounded-l-sm"
                >
                    <h2>Ryo Kagaya Inciong</h2>
                    <ul className="pt-3 text-sm sm:text-base">
                        <li className="pb-1 ml-4 sm:ml-8 hover:text-yellow-primary">
                            <a href="tel:1-818-524-8631">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                1-818-524-8631
                            </a>
                        </li>
                        <li className="pb-1 ml-8 sm:ml-16 hover:text-yellow-primary">
                            <a href="mailto:ryo.sr400@gmail.com">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                ryo.sr400@gmail.com
                            </a>
                        </li>
                        <li className="text-sm sm:text-base pb-1 ml-12 sm:ml-24 hover:text-yellow-primary">
                            <a href="https://twitter.com/peche29812486" target="_blank" rel="noreferrer">
                                Twitter
                            </a>
                        </li>
                        <li className="text-sm sm:text-base pb-1 ml-16 sm:ml-32 hover:text-yellow-primary">
                            <a href="https://www.instagram.com/pecherk_art/" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li className="text-sm sm:text-base ml-20 sm:ml-40 hover:text-yellow-primary">
                            <a href="https://www.linkedin.com/in/ryo-inciong/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
                <small className=" absolute bottom-10 right-10 font-montserrat text-black-primary">
                    &copy; {year} Ryo K Inciong
                </small>
            </div>
        </div>
    );
}
