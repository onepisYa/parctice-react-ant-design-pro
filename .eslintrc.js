module.exports = {
  extends: [
    require.resolve('@umijs/lint/dist/config/eslint'),
    // 'plugin:react-hooks/recommended',
    // 'react-app',
    // 'react-app/jest',
    // 'prettier',
  ],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
