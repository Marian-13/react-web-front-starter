module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  env: { browser: true },
  parser: 'babel-eslint', // Alternative parser for correct static properties parsing
  globals: {},
  rules: {
    // prettier
    'prettier/prettier': 'error',

    // eslint

    // eslint-plugin-jsx-a11y

    // eslint-plugin-import

    // eslint-plugin-react
  }
}
