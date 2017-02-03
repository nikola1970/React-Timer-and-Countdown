var wepback = require("webpack");

module.exports = {

	entry: "./app/App.js",

	output: {
		path: "./public",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react", "stage-2"]
				}
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{ 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			}
		]
	}


}