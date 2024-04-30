module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['android'],
  rules: {
    semi: 0,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 'error',
  },
}
