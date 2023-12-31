import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./src"
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  rootDir: "./src",
  moduleNameMapper: {
    "@fb-components/(.*)": "<rootDir>/packages/fb-components/$1",
    "@fb-contexts/(.*)": "<rootDir>/packages/fb-contexts/$1",
    "@fb-containers/(.*)": "<rootDir>/packages/fb-containers/$1",
    "@fb-hooks/(.*)": "<rootDir>/packages/fb-hooks/$1",
    "@fb-features-recoil/(.*)": "<rootDir>/packages/fb-features-recoil/$1",
    "@fb-services/(.*)": "<rootDir>/packages/fb-services/$1",
    "@mocks/(.*)": "<rootDir>/mocks/$1",
    "@views/(.*)": "<rootDir>/views/$1",
    "@utils/(.*)": "<rootDir>/utils/$1",
    "@theme/(.*)": "<rootDir>/theme/$1",
    "@config/(.*)": "<rootDir>/config/$1",
    "@test-utils": "<rootDir>/test-utils"
  }
};

export default createJestConfig(config);
