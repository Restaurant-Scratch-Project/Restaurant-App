const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'webpack-bundle.js',
		publicPath: '/build/'
	},
	watch: true,

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: __dirname,
		hot: true,
		inline: true,
		port: 8080,
		stats: {
			colors: true
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
						presets: ['es2015', 'react']
				}
			},
			{
				test: /(\.css|\.scss)$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}
};