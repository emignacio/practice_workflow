const path = require('path');
const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer'),
];

module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/app',
	},
	mode: 'development',
	watch: true, //watch sets live tracking of files
	module: {
		rules: [
			{
				test: /\.css$/i, //test for files with .css extension
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: postCSSPlugins, //postcss-loader needs plugins to work. options is evaluated right to left
						},
					},
				], //use style-loader(applies) and css-loader(loads) when test result is true
			},
		],
	},
};
