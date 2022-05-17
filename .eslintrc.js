module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: ["./tsconfig.eslint.json", "./packages/**/tsconfig.json"],
        allowAutomaticSingleRunInference: true,
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: ["*.js"],
    rules: {
        "linebreak-style": ["error", "unix"],
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true,
            },
        ],
        semi: ["error", "always"],
        indent: "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                ignoreRestSiblings: true,
            },
        ],
        "@typescript-eslint/no-namespace": [
            "error",
            {
                allowDeclarations: true,
            },
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                allowHigherOrderFunctions: false,
            },
        ],
        "@typescript-eslint/no-floating-promises": ["error"],

        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                allow: ["private-constructors", "protected-constructors", "decoratedFunctions"],
            },
        ],
    },
};
