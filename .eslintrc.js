module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        'react/no-deprecated': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tx', '.tsx'] }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'i18next/no-literal-string': ['error', {markupOnly: true}]
    },
    globals: {
        "__IS_DEV__": true
    }
}
