import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    const closeMenu = (e) => {
        if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (window.location.href.includes('contact')) {
            setCurrentPage('contact');
        } else if (window.location.href.includes(ROUTES.WEB_APPS)) {
            setCurrentPage('webApps');
        } else if (window.location.href.includes(ROUTES.ART_GALLERY)) {
            setCurrentPage('artGallery');
        } else {
            setCurrentPage('aboutMe');
        }
    }, [window.location.href]);

    return (
        <>
            {/* menu for small screen or bigger */}
            <div className="hidden sm:flex fixed top-4 right-2 z-90">
                <ul className="flex text-black-primary font-montserrat">
                    <li
                        className={`px-2 ${
                            currentPage === 'aboutMe' && 'border-b-4 border-dotted border-gray-primary'
                        } `}
                    >
                        <HashLink to="/#top" scroll={(el) => scrollWithOffset(el)} exact>
                            ABOUT ME
                        </HashLink>
                    </li>
                    <li
                        className={`px-2 ${
                            currentPage === 'webApps' && 'border-b-4 border-dotted border-gray-primary'
                        } `}
                    >
                        <Link to={ROUTES.WEB_APPS}>WEB APPS</Link>
                    </li>
                    <li
                        className={`px-2 ${
                            currentPage === 'artGallery' && 'border-b-4 border-dotted border-gray-primary'
                        } `}
                    >
                        <Link to={ROUTES.ART_GALLERY}>ART GALLERY</Link>
                    </li>
                    <li
                        className={`px-2 ${
                            currentPage === 'contact' && 'border-b-4 border-dotted border-gray-primary'
                        } `}
                    >
                        <HashLink to="/#contact" scroll={(el) => scrollWithOffset(el)} exact>
                            CONTACT
                        </HashLink>
                    </li>
                </ul>
            </div>
            {/* menu for smaller than small screen */}
            <button
                onClick={() => {
                    setIsMenuOpen((prevState) => !prevState);
                }}
                className="fixed flex sm:hidden top-4 right-4 z-99"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-10 w-10 transform duration-300 opacity-80 ${
                        isMenuOpen ? 'text-yellow-primary' : 'text-black-primary'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </button>
            <div
                onClick={closeMenu}
                className={`fixed z-90 top-0 h-screen w-screen transform duration-300 ${
                    isMenuOpen ? 'right-0' : ' -right-full'
                }`}
            >
                <div className="absolute top-0 right-0 w-2/3 h-full bg-black-primary bg-opacity-80">
                    <ul className="text-gray-primary font-montserrat text-lg px-4 pt-16">
                        <li className={`px-2 pb-4 ${currentPage === 'aboutMe' && 'text-yellow-primary'} `}>
                            <HashLink
                                to="/#top"
                                scroll={(el) => scrollWithOffset(el)}
                                exact
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ABOUT ME
                            </HashLink>
                        </li>
                        <li className={`px-2 pb-4 ${currentPage === 'webApps' && 'text-yellow-primary'} `}>
                            <Link to={ROUTES.WEB_APPS} onClick={() => setIsMenuOpen(false)}>
                                WEB APPS
                            </Link>
                        </li>
                        <li className={`px-2 pb-4 ${currentPage === 'artGallery' && 'text-yellow-primary'} `}>
                            <Link to={ROUTES.ART_GALLERY} onClick={() => setIsMenuOpen(false)}>
                                ART GALLERY
                            </Link>
                        </li>
                        <li className={`px-2 pb-4 ${currentPage === 'contact' && 'text-yellow-primary'} `}>
                            <HashLink
                                to="/#contact"
                                scroll={(el) => scrollWithOffset(el)}
                                exact
                                onClick={() => setIsMenuOpen(false)}
                            >
                                CONTACT
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
