const path = require('path');
const webpack = require('webpack');
var entry = require('webpack-glob-entry')

module.exports = {
    entry:  entry('./src/main/typescript/*.ts'),
    devtool : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
       filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'src/main/webapp/js')
    }
  };
