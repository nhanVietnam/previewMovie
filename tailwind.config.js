/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["DM Sans", "sans-serif"],
            },
            colors: {
                primary: "#f62682",
                secondary: "#6F5CF1",
            },
            gridTemplateColumns: {
                fluid: "repeat(auto-fit, minmax(356px, 1fr))",
            },
        },
    },
    plugins: [],
};
