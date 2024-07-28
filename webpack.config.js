const path = require('path');

module.exports = {
  entry: {
    dev: "./src/index.tsx",
  },
  output: {
    filename: "./build/index.js",
  },
  devtool: "source-map",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  },
  module: {
    loaders: [
      // Typescript
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};
