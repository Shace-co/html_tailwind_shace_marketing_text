/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                'White_smoke': '#F5F5F5',
                'gray_color': '#595959',
                'red_color': '#911E4F',
                'nero_color': '#222222',
                'light_gray_color': '#CCCCCC',
                'text-color': '#8D8D8D',
                'gray-1000': '#B1B1B1',
                'pink-color': '#D7B9C6',
            },
            boxShadow: {
                '2xl': '0px 4px 29px rgba(0, 0, 0, 0.09)',
                '3xl': '25px -19px 29px rgba(0, 0, 0, 0.06)',
            },
            screens: {
                'xs': '375px',
                // => @media (min-width: 320px) { ... }

                'sm': '576px',
                // => @media (min-width: 575px) { ... }


                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '992px',
                // => @media (min-width: 992px) { ... }

                'xl': '1200px',
                // => @media (min-width: 1200px) { ... }

                '2xl': '1366px',
                // => @media (min-width: 1440px) { ... }
                '3xl': '1750px',
                // => @media (min-width: 1600px) { ... }
            },
            fontFamily: {
                'Inter': ['Inter'],
                'Maven': ['Maven Pro'],
            }
        },

    },
    plugins: [
        require('flowbite/plugin')
    ]
}