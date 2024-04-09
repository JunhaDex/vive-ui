module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  env: {
    node: true,
    browser: true
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
