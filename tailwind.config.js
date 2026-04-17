/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./order.html", 
    "./profile.html",
    "./signin.html",
    "./signup.html",
    "./menu.html",
    "./recipes.html",
    "./desserts.html",
    "./about.html",
    "./contact.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
