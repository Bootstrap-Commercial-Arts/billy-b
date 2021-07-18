module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                darkblue: "#007b8c",
                lightblue: "#63eaff",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};