/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                teko: ['Teko', 'sans-serif']
            },
            colors: {
                'header-body': 'rgba(var(--header-body))',
                'header-text': 'rgba(var(--header-text))',

                'navbar-body': 'rgba(var(--navbar-body))',
                'navbar-text': 'rgba(var(--navbar-text))',
                'navbar-grad-light': 'rgba(var(--navbar-grad-light))',
                'navbar-grad-dark': 'rgba(var(--navbar-grad-dark))',

                body: 'rgba(var(--body))',
                card: 'rgba(var(--card))',
                'card-text-primary': 'rgba(var(--card-text-primary))',
                'card-text-secondary': 'rgba(var(--card-text-secondary))',
                'card-edit': 'rgba(var(--card-edit))',
                'card-delete': 'rgba(var(--card-delete))',
                'card-arm': 'rgba(var(--card-arm))',
                'card-disarm': 'rgba(var(--card-disarm))',

                'mobile-bar-icon-active': 'var(--mobile-bar-icon-active)',
                'mobile-bar-icon-inactive': 'var(--mobile-bar-icon-inactive)'
            }
        }
    },
    plugins: []
}
