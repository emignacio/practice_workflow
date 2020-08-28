const path = require('path');
const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-mixins'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer'),
];

module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'app'), //#__dirname resolves to path of file being executed, ./ resolves to current location of executor (run "node Sandbox/node\ experiment/test.js" for example)
	},
	devServer: {
		//holds files in ram. making delivery faster.
		before: function (app, server) {
			//allow live loading of html
			server._watch('./app/**/*.html');
		},
		contentBase: path.join(__dirname, 'app'),
		hot: true, //allows browser to talk with files. if files change, browser automatically refreshes.
		port: 3000,
		host: '0.0.0.0', //host allows other devices in network to view live page. connect using (ipaddress):3000
	},
	mode: 'development',
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
