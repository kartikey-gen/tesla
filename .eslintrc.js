module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    extends: ['eslint:recommended'],
    rules: {
      // Possible Errors
      'no-console': 'warn', 
      'no-debugger': 'error', 
      // Best Practices
      'no-unused-vars': 'warn',
      'no-eval': 'error',
    },
  };
  