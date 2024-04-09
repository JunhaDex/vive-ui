/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        '@repo/eslint-config/vite-vue.js',
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    }
}
