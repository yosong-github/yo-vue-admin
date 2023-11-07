module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    'src/**/*.ts': ['eslint --fix', 'prettier --write'],
    'src/**/*.vue': ['eslint --fix', 'prettier --write'],
    'src/**/*.{scss,less,html}': ['prettier --write']
}
