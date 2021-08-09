import normalize from "emotion-normalize"

const colors = {
    lightBlue: "#45D1E6",
    mediumBlue: "#00B1CC",
    darkBlue: "#0096AC",
    lightGreen: "#63ce63",
    mediumGreen: "#0bb10c",
    darkGreen: "#01a902",
    lightYellow: "#fdcd3a",
    mediumYellow: "#fdd24a",
    darkYellow: "#f8ac00",
    lightPink: "#e481cb",
    darkPink: "#b44ac4",
    white: "#fff",
    black: "#000000",
    formGray: "rgba(156, 163, 175, var(--tw-text-opacity))",
}

const breakpoints = {
    extraLarge: "@media (min-width:1200px)",
    desktop: "@media (max-width: 1024px)",
    mobile: "@media (max-width: 680px)",
}

const fontFamily = "Roboto, Helvetica, sans-serif"

export default {
    ...colors,
    ...breakpoints,
    fontFamily,
}

export const globalStyles = [
    normalize,
    {
        html: {
            fontSize: "1vw",
            fontFamily: fontFamily,
            fontStyle: "normal",
            lineHeight: 1.25,
            wordBreak: "break-word",
            boxSizing: "border-box",
            // Improve browser font rendering
            textRendering: "optimizeLegibility",
            fontFeatureSettings: "'kern' 1",
            fontKerning: "normal",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            // VERIFY SIZING
            // [breakpoints.desktop]: { fontSize: "1.5vw" },
            [breakpoints.mobile]: { fontSize: "2.5vw" },
            [breakpoints.extraLarge]: {fontSize:"12px" },
        },
        body: {
            margin: 0,
            padding: 0,
            lineHeight: 1.2,
            border: 0,
            fontSize: "100%",
            font: "inherit",
            verticalAlign: "baseline",
        },
        [
            ["h1", "h2", "h3", "h4", "h5", "h6"]
        ]: {
            margin: 0,
            lineHeight: 1,
        },
        p: {
            fontSize: "1.5rem",
        },
        ".row, .grid-row": {
            padding: "1rem",
        },
        ".row": {
            display: "block",
        },
        ".flex-row, .inset-row": {
            display: "flex",
            [breakpoints.mobile]: { display: "block" },
        },
        ".grid-row": {
            display: "grid",
        },
        ".column": {
            flex: 1,
            padding: "1rem",
        },
        ".row, .flex-row, .grid-row": {
            [breakpoints.extraLarge]: { width: "1200px", margin: "0 auto" },
        },
    },
]