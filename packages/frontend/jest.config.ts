/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import {
    type JestConfigWithTsJest,
    createDefaultPreset,
    pathsToModuleNameMapper
} from 'ts-jest'

const pathMappings = {
    'assets/*': ['src/assets/*'],
    'components/*': ['src/components/*'],
    'stories/*': ['src/stories/*'],
    'types/*': ['src/types/*']
}

const defaultPreset = createDefaultPreset()

const config: JestConfigWithTsJest = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    modulePaths: ['./src'],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(pathMappings),
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss|less)$': 'identity-obj-proxy'
    },

    preset: 'ts-jest/presets/default-esm',

    roots: ['<rootDir>'],

    testEnvironment: 'jsdom',

    ...defaultPreset
}

export default config
