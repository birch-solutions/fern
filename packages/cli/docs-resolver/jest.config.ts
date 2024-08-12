import { Config } from "jest";

// list to add ESM to ignore
const esModules = ["lodash-es"].join("|");

export default async (): Promise<Config> => {
    return {
        testMatch: ["**/__test__/**/*.test.ts{,x}"],
        transform: {
            "\\.[jt]sx?$": ["babel-jest", { rootMode: "upward" }]
        },
        transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`]
    };
};
