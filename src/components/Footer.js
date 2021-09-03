import React from 'react';

export default function Footer() {
    let day = new Date();
    let year = day.getFullYear();
    return (
        <div className="text-right pt-40 mr-10 pb-5 text-black-primary">
            <small className="w-screen font-montserra">&copy; {year} Ryo K Inciong</small>
        </div>
    );
}
