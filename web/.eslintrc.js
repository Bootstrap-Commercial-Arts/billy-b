module.exports = {
  parser: "babel-eslint",
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["standard", "react", "react-hooks", "prettier"],
  rules: {
    "react/prop-types": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
  },
  env: {
    jest: true,
  },
}
