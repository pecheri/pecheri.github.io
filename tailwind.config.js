module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // rotate: {
        //     '-180': '-180deg',
        //     '-90': '-90deg',
        //     '-45': '-45deg',
        //     '-30': '-30deg',
        //     0: '0',
        //     30: '30deg',
        //     45: '45deg',
        //     90: '90deg',
        //     135: '135deg',
        //     180: '180deg',
        //     270: '270deg',
        // },
        extend: {
            fontFamily: {
                monoton: ['Monoton', 'cursive'],
                urbanist: ['Urbanist', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                yellow: {
                    primary: '#FFC700',
                },
                red: {
                    primary: '#FC2D00',
                },
                blue: {
                    primary: '#0032E2',
                },
                gray: {
                    primary: '#FFFFFF',
                },
                black: {
                    primary: '#393939',
                },
            },
            borderWidth: {
                100: '100px',
            },
            rotate: {
                '-30': '-30deg',
                '-20': '-20deg',
                30: '30deg',
            },
            zIndex: {
                90: '90',
                99: '99',
            },
            width: {
                700: '700px',
            },
        },
    },
    variants: {
        extend: {
            scale: ['group-hover'],
        },
    },
    plugins: [],
};
