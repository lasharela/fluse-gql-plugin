module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsConfig: "src/tsconfig.json"
    }
  },
  maxConcurrency: 1,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "json"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },

  testPathIgnorePatterns: [],
  testRegex: "(/(__test__|tests)/.*|(\\.|/))\\.test\\.tsx?$",
  watchPathIgnorePatterns: [".tmp", "dist"]
};
