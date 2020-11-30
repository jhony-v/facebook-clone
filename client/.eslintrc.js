module.exports = {
  extends: [
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {  
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "max-len": ["error",{"code":500}],
    "react/jsx-sort-default-props": "off",
    "react/no-array-index-key" : "off",
    "react/no-unescaped-entities" : "off",
    "react/no-unused-prop-types" : "off"
  }
};
