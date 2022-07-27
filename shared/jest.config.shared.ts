// eslint-disable-next-line jest/no-jest-import
import { Config } from "jest";

const config: Config = {
    testMatch: ["**/__test__/**/*.test.ts{,x}"],
    transform: {
        "\\.[jt]sx?$": ["babel-jest", { rootMode: "upward" }],
    },
    modulePathIgnorePatterns: ["<rootDir>/packages/.*/__test__/.*/generated"],
};

export default config;
