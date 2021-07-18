module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                darkblue: "#007b8c",
                mediumblue: "#00b1cc",
                lightblue: "#63eaff",
                lightyellow: "#fcdb58",
                darkyellow: "#f8ac00",
                lightpink: "#e481cb",
                darkpink: "#b44ac4",
                lightgreen: "#63ce63",
                darkgreen: "#01a902",
                mediumgreen: "#0bb10c",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};