import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import nextJest from "next/jest.js";
const { compilerOptions } = require("./tsconfig.json");

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^jose$": require.resolve("jose"),
    "^@panva/hkdf$": require.resolve("@panva/hkdf"),
    "^uuid$": require.resolve("uuid"),
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!jose/.*)",
    "/node_modules/(?!@panva/hkdf/.*)",
    "/node_modules/(?!next-auth/.*)",
    "/node_modules/(?!uuid/.*)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);

// import type { Config } from 'jest';
// import nextJest from 'next/jest.js';
// import { pathsToModuleNameMapper } from "ts-jest";
// const { compilerOptions } = require("./tsconfig.json");
//
// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: './',
// });
//
// // Add any custom config to be passed to Jest
// const config: Config = {
//   coverageProvider: 'v8',
//   collectCoverage: true,
//   collectCoverageFrom: undefined,
//   coverageDirectory: "coverage",
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
//     prefix: "<rootDir>/",
//   }),
//   clearMocks: true,
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testPathIgnorePatterns: ["/node_modules/", "/.next/"],
// };
//
// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config);
