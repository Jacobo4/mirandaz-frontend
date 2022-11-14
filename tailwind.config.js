module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./layout/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Ancizar Sans', 'ui-sans-serif', 'system-ui'],
            'serif': ['Ancizar Serif', 'ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
        },
        extend: {
            colors: {
                'purple': {
                    100: '#e6e4f3',
                    200: '#b5aedc',
                    300: '#9d93d0',
                    400: '#8478c5',
                    500: '#5748a7',
                    600: '#3b3171',
                    700: '#2D2556',//Primary
                    800: '#2A234A',
                    900: '#25203D'
                },
                'orange': {
                    100: '#fbe1d2',
                    200: '#f7c3a5',
                    300: '#f6b48f',
                    400: '#f4a579',
                    500: '#f29662',
                    600: '#ee7835',
                    700: '#EC691F',//secondary
                    800: '#D15108',
                    900: '#DE5000'
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

