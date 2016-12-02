module.exports = {

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./src/index'
	],

	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: './'
	},

	// Currently we need to add '.ts' to the resolve.extensions array.
	resolve: {
		extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
		modulesDirectories: ['node_modules']
	},

	// Source maps support ('inline-source-map' also works)
	devtool: 'inline-source-map',

	// Add the loader for .ts files.
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};