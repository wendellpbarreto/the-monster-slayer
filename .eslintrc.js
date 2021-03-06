module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': [2, "double", "avoid-escape"],
    'space-before-function-paren': ["error", "never"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
