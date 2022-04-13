module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
    },
  },
  extends: ['plugin:@typescript-eslint/recommended', '@react-native-community'],
  rules: {
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'global-require': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'no-console': ['error', { allow: ['warn', 'info', 'debug'] }],
    curly: 'error',
    'react/jsx-closing-bracket-location': [
      1,
      { selfClosing: 'line-aligned', nonEmpty: 'after-props' },
    ],
    'react/no-array-index-key': 1,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': [
      'error',
      { ignoreArgsIfArgsAfterAreUsed: true },
    ],
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-explicit-any': [1, { ignoreRestArgs: true }],
    '@typescript-eslint/no-var-requires': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '~': './src',
        },
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.jpg',
          '.png',
          '.svg',
          '.d.ts',
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  globals: {
    __DEV__: true,
  },
};
