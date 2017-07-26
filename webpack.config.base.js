module.exports = {
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "autoprefixer?browsers=last 2 version!less-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true"]
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }],
  },
  output: {
    library: 'ReactAce',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx'],
  },
};