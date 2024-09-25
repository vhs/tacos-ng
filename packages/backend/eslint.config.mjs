import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default tseslint.config(
    {
        files: ['src/**/*.cjs', 'src/**/*.js', 'src/**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json']
            }
        }
    },
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    ...tseslint.configs.stylisticTypeChecked,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ]
        }
    },
    ...compat.extends('eslint-config-standard'),
    eslintConfigPrettier
)
