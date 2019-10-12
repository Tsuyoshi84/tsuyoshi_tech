module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    'vue/attributes-order': 0
  }
}
