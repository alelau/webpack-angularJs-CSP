const path = require('path');

const cspSafe = "default-src 'self'";
const cspUnsafe = "default-src 'self' script-src: 'unsafe-eval'";
const cspSafeSelf = "default-src 'self' script-src: 'self' 'unsafe-eval'";

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    headers: {
      'Content-Security-Policy': cspSafeSelf,
    },
  },
};
