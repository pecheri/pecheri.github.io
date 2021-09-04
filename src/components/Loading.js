import React from 'react';

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <p className="font-pressstart text-xl sm:text-2xl text-black-primary">
                <div className="flex border-4 border-black-primary py-2 px-4 sm:py-4 sm:px-8 rounded-full">
                    <p>Loading</p>
                    <p className="animate-bounce">.</p>
                    <p className="animate-bounce" style={{ animationDelay: '0.3s' }}>
                        .
                    </p>
                    <p className="animate-bounce" style={{ animationDelay: '0.6s' }}>
                        .
                    </p>
                </div>
            </p>
        </div>
    );
}
