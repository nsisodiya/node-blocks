module.exports = {
	entry: {
		"nodeBlocks": "./src/entry.js",
		"example": "./example/example.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"node-blocks": {
			commonjs: 'node-blocks',
			commonjs2: 'node-blocks',
			amd: 'nodeBlocks',
			root: 'nodeBlocks'
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};