const path = require('path');
var entry = require('webpack-glob-entry')
const CopyPlugin = require("copy-webpack-plugin");

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
    devServer: {
    	open: true
    },
    output: {
    	filename: '[name].js',
      	path: path.resolve(__dirname, 'src/main/webapp/js')
    },
	plugins: [
    	new CopyPlugin({
      		patterns: [{ from: "./src/index.html", to: "./src/main/webapp/html" }],
    	}),
  	],    
  };
