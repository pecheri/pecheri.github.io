import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img23 from '../images/artgallery/1stdrawing.PNG';
import img3 from '../images/artgallery/ac.PNG';
import img18 from '../images/artgallery/acne.PNG';
import img4 from '../images/artgallery/arare.PNG';
import img5 from '../images/artgallery/bikini.PNG';
import img6 from '../images/artgallery/blackgirl.PNG';
import img7 from '../images/artgallery/boxing.PNG';
import img9 from '../images/artgallery/cat_hat.PNG';
import img8 from '../images/artgallery/cat_newyear.PNG';
import img10 from '../images/artgallery/cat_paint.JPG';
import img24 from '../images/artgallery/cat_skate.PNG';
import img11 from '../images/artgallery/kapoera.PNG';
import img13 from '../images/artgallery/la.png';
import img14 from '../images/artgallery/makeup.PNG';
import img15 from '../images/artgallery/me.PNG';
import img16 from '../images/artgallery/meowsJPG.JPG';
import img12 from '../images/artgallery/skate1.JPG';
import img1 from '../images/artgallery/skate2.JPG';
import img17 from '../images/artgallery/smash.PNG';
import img20 from '../images/artgallery/spl_nintendo.PNG';
import img21 from '../images/artgallery/spl_paint.JPG';
import img19 from '../images/artgallery/spl_water.PNG';
import img2 from '../images/artgallery/tea.png';
import img22 from '../images/artgallery/traveling.PNG';
import img25 from '../images/artgallery/utadasheena.jpg';

const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
];

export default function ArtGallery() {
    const [isImageClicked, setIsImageClicked] = useState(false);
    const [currentImg, setCurrentImg] = useState();
    // const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        // setCurrentPage('artGallery');
        document.title = 'Art Gallery - Ryo K Inciong';
    }, []);

    const imgClickHandler = (img) => {
        setIsImageClicked(true);
        setCurrentImg(img);
    };

    const closeImage = (e) => {
        if (e.target === e.currentTarget) {
            setIsImageClicked(false);
        }
    };

    const showNextImg = () => {
        if (imgs.length - 1 !== imgs.indexOf(currentImg)) {
            setCurrentImg((prevState) => imgs[imgs.indexOf(prevState) + 1]);
        }
    };

    const showPrevImg = () => {
        if (imgs.indexOf(currentImg) > 0) {
            setCurrentImg((prevState) => imgs[imgs.indexOf(prevState) - 1]);
        }
    };

    return (
        <div className="relative w-screen font-montserrat">
            <Header />
            <div className="bg-red-primary h-32 sm:h-40 w-700 sm:w-screen transform -rotate-20 origin-bottom-left fixed top-10 flex justify-start items-end pb-4 border-b-8 border-blue-primary z-50">
                <p className="absolute pl-12 sm:pl-20 text-gray-primary text-3xl sm:text-4xl font-monoton">
                    Art Gallery
                </p>
            </div>
            <div className="pt-40 max-w-screen-xl mx-auto z-40">
                <div className="grid grid-cols-2 sm:grid-cols-3 z-40">
                    {imgs.map((img, index) => (
                        <div className="flex items-center justify-center z-40" key={index}>
                            <img
                                src={img}
                                alt={`img${index}`}
                                className="w-11/12 sm:w-4/5 my-2 sm:my-8 border-8 border-gray-primary transform duration-300 sm:hover:scale-110 cursor-pointer rounded"
                                onClick={() => imgClickHandler(img)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {isImageClicked && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-99 bg-black-primary bg-opacity-70"
                    onClick={(e) => {
                        closeImage(e);
                    }}
                >
                    <button
                        onClick={showPrevImg}
                        className={`hidden md:flex text-gray-primary absolute md:left-4 lg:left-2 xl:left-40 top-1/2 p-4 rounded opacity-80 hover:opacity-100 z-99 ${
                            imgs.indexOf(currentImg) === 0 && 'md:hidden'
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={showNextImg}
                        className={`hidden md:flex text-gray-primary absolute md:right-4 lg:right-2 xl:right-40 top-1/2 p-4 rounded opacity-80 hover:opacity-100 z-99 ${
                            imgs.length - 1 === imgs.indexOf(currentImg) && 'md:hidden'
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <div className="relative flex items-center justify-center w-screen max-w-screen-lg">
                        <button
                            onClick={() => setIsImageClicked(false)}
                            className="absolute -top-6 right-0 sm:top-6 sm:right-0 text-gray-primary opacity-80 hover:opacity-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <img src={currentImg} className="max-w-screen max-h-screen p-2 sm:p-8" />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
