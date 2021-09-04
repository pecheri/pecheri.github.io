import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function NotFound() {
    return (
        <div className="flex h-screen w-screen justify-center items-center font-pressstart bg-black-primary text-yellow-primary text-xl">
            <div>
                <p className="text-center text-2xl">404</p>
                <p className="text-center mb-8 text-2xl">PAGE NOT FOUND</p>
                <p className="text-center mb-4">CONTINUE?</p>
                <div className="flex justify-evenly">
                    <HashLink to="/#top" exact className="hover:text-gray-primary">
                        YES
                    </HashLink>
                    {/* <p>YES</p> */}
                    <p className="cursor-not-allowed">NO</p>
                </div>
            </div>
        </div>
    );
}
