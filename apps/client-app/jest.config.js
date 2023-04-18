module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["./setupTests.ts"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json"
    }
  },
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
