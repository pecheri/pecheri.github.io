import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import artisto from '../images/webapps/artisto.jpeg';
import timer from '../images/webapps/timer.jpeg';
import weather from '../images/webapps/weather.jpeg';

export default function WebApps() {
    useEffect(() => {
        document.title = 'Web Apps - Ryo K Inciong';
    }, []);
    return (
        <div className="relative w-screen font-montserrat">
            <Header />
            <div className="bg-red-primary h-32 sm:h-40 w-700 sm:w-screen transform -rotate-20 origin-bottom-left fixed top-10 flex justify-start items-end pb-4 border-b-8 border-blue-primary z-50">
                <p className="absolute pl-12 sm:pl-20 text-gray-primary text-3xl sm:text-4xl font-monoton">Web Apps</p>
            </div>
            <div className="pt-60 w-screen max-w-screen-xl mx-auto">
                <div className="bg-gray-primary w-11/12 sm:w-2/3 md:w-1/2 flex items-start px-2 py-2 md:px-8 md:py-8 rounded transform sm:hover:translate-x-10 sm:hover:scale-105 duration-300 ml-auto sm:ml-8 mb-8">
                    <div className="w-1/3 text-black-primary">
                        <p className="font-medium text-base sm:text-lg">Artisto</p>
                        <p className="font-medium text-xs sm:text-sm">(Social Media App)</p>
                        <ul className="ml-2 mt-2 text-xs sm:text-sm">
                            <li>React</li>
                            <li>Firebase</li>
                            <li>Cloudinary</li>
                            <li>Tailwind CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="w-2/3">
                        <div className="flex justify-center sm:justify-end ">
                            <img src={artisto} alt="artisto" className=" border-4 border-gray-primary" />
                        </div>
                        <div className="flex justify-center">
                            <a
                                href="https://github.com/pecheri/artisto"
                                target="_blank"
                                rel="noreferrer"
                                className="mx-2 border-b border-black-primary hover:text-yellow-primary text-sm"
                            >
                                repository
                            </a>
                            <a
                                href="https://pecheri.github.io/artisto/"
                                target="_blank"
                                className="mx-2 border-b border-black-primary hover:text-yellow-primary text-sm"
                                rel="noreferrer"
                            >
                                Website
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-primary w-11/12 sm:w-2/3 md:w-1/2 flex items-start mr-auto sm:ml-auto px-2 py-2 md:px-8 md:py-8 rounded transform sm:hover:-translate-x-10 sm:hover:scale-105 duration-300 sm:mr-8 mb-8">
                    <div className="w-2/3">
                        <div className="flex">
                            <img
                                src={weather}
                                alt="weather"
                                className="border-4 border-gray-primary transform group-hover:scale-125"
                            />
                        </div>
                        <div className="flex justify-center">
                            <a
                                href="https://github.com/pecheri/react-weather-app"
                                target="_blank"
                                rel="noreferrer"
                                className="mx-2 border-b border-black-primary hover:text-yellow-primary text-sm inline-block"
                            >
                                repository
                            </a>
                            <a
                                href="https://pecheri.github.io/react-weather-app/"
                                target="_blank"
                                className="mx-2 border-b border-black-primary hover:text-yellow-primary text-sm inline-block"
                                rel="noreferrer"
                            >
                                Website
                            </a>
                        </div>
                    </div>

                    <div className="w-1/3 text-black-primary">
                        <p className="font-medium text-base sm:text-lg">Weather App</p>
                        <ul className="ml-2 mt-2 text-xs sm:text-sm">
                            <li>React</li>
                            <li>
                                API (
                                <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
                                    Open Weather
                                </a>
                                )
                            </li>
                            <li>Tailwind CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-primary w-11/12 sm:w-2/3 md:w-1/2 flex items-start px-2 py-2 md:px-8 md:py-8 rounded transform sm:hover:translate-x-10 sm:hover:scale-105 duration-300 ml-auto sm:ml-8 mb-8">
                    <div className="w-1/3 text-black-primary">
                        <p className="font-medium text-base sm:text-lg">Pomodoro timer</p>

                        <ul className="ml-2 mt-2 text-xs sm:text-sm">
                            <li>React</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="w-2/3">
                        <div className="flex justify-end">
                            <img src={timer} alt="timer" className="border-4 border-gray-primary" />
                        </div>
                        <div className="flex justify-center">
                            <a
                                href="https://github.com/pecheri/pomodoro_timer"
                                target="_blank"
                                rel="noreferrer"
                                className="mx-2 border-b border-black-primary hover:text-yellow-primary text-sm"
                            >
                                repository
                            </a>
                            <a
                                href="https://pecheri.github.io/pomodoro_timer/"
                                target="_blank"
                                className="mx-2 border-b border-black-primary hover:text-yellow-primary text-sm"
                                rel="noreferrer"
                            >
                                Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
