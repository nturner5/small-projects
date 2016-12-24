module.exports = {
	entry: {
		main: "./src/components/Routes.js",
	},
	output: {
		filename: "bundle.js",
		path: "./dist"
	},
	module: {
		loaders: [ 
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				loaders: [ 'style-loader', 'css-loader', 'sass-loader']
			}	
		]	
	}

}
