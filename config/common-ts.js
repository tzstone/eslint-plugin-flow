module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', require.resolve('./base')],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止ts指令注释
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用any类型
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}