/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'eslint-config-airbnb-base',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        './.eslintrc-auto-import.json',
        'plugin:prettier/recommended'
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true
    },
    plugins: ['vue', '@typescript-eslint'],
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx']
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {}
}
