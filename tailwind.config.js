/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Tc: ['Noto Sans TC', 'sans-serif']
      },
      height: {
        bg: 'calc(100vh - 44px)'
      }
    },
    colors: {
      white: '#fff',
      primary: '#00ffe0',
      'primary-dark': '#008d96',
      'primary-deepdark': '#005656',
      'primary-linear': {
        100: 'rgba(0, 255, 225, 0)',
        200: 'rgba(0, 255, 224, 0.25)',
        300: 'rgba(0, 255, 224, 0.45)',
        400: 'rgba(0, 255, 224, 0.7)',
        500: 'rgba(0, 255, 224, 0.9)'
      },
      'dark-text': '#1c3245',
      'tint-text': '#00ffe0',
      role: '#d355ff',
      'dark-sm': '#4c0071',
      'tint-sm': '#ff00f5',
      'team-primary': 'ffc700',
      'team-primary-linear': {
        100: 'rgba(255,199,0,0)',
        200: 'rgba(255,199,0,0.05)',
        300: 'rgba(255,199,0,0.2)',
        400: 'rgba(255,199,0,0.6)'
      },
      'team-secondary': 'ff5c00',
      'team-secondary-linear': {
        100: 'rgba(255,122,0,0)',
        200: 'rgba(255,122,0,0.05)',
        300: 'rgba(255,122,0,0.2)',
        400: 'rgba(255,122,0,0.6)'
      },
      'team-dark': '#933500',
      'linear-sm': {
        100: 'rgba(211,85,255,0)',
        200: 'rgba(211,85,255,0.05)',
        300: 'rgba(211,85,255,0.2)',
        400: 'rgba(211,85,255,0.6)'
      },
      'bg-dark': '#0a0d14',
      'bg-dark-60': 'rgba(10,13,20,0.6)',
      'bg-dark-80': 'rgba(10,13,20,0.8)',
      'bg-transition': 'rgba(28,50,69,0.6)',
      danger: '#ff0000'
    }
  },
  plugins: []
}
