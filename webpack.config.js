const path = require('path');

module.exports = {
    entry: "/index.js",
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    }
}