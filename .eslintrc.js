module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:json/recommended'],
  plugins: ['react-hooks'],
  parserOptions: {
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
};
