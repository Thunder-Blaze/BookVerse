/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brown: {
                    500: '#8B4513',
                    600: '#654321',
                    700: '#5D4037',
                    800: '#4E342E',
                },
                background: 'rgb(var(--background-rgb))',
                foreground: 'rgb(var(--foreground-rgb))',
            },
            fontFamily: {
                urbanist: ['var(--font-urbanist)'],
                jetbrains: ['var(--font-jetbrains-mono)'],
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                glow: 'glow 2s infinite',
            },
            keyframes: {
                glow: {
                    '0%, 100%': {
                        'text-shadow':
                            '0 0 0px #ff8c00, 0 0 0px #ffa500, 0 0 0px #ff4500',
                    },
                    '50%': {
                        'text-shadow':
                            '0 0 0px #ffd700, 0 0 0px #ff8c00, 0 0 0px #ff4500',
                    },
                },
            },
            boxShadow: {
                glow: '0 0 15px rgba(255, 140, 0, 0.5)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
