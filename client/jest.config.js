const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions : { paths } } = require("./tsconfig.json")

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper : pathsToModuleNameMapper(paths);
};