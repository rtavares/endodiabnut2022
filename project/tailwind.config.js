/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './endodiabnut2022/website/**/*.{html,njk,js,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
