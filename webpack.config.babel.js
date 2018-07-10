import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'


const htmlWebpackPluginConfig = new HtmlWebpackPlugin({template: __dirname + '/app/index.html',
filename:'index.html',
inject: 'body'});

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}
const isProduction = process.env.NODE_ENV === 'production'
process.env.BABEL_ENV = isProduction ? 'production': 'development';


const config = {
  entry: [
    PATHS.app
  ],
  mode : process.env.BABEL_ENV || 'development',
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
    publicPath:'/'
  },
  module: {
    rules: [
      {test:/\.json$/, loader: 'json'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'}
    ]
  },
  resolve: {
    modules: [ path.resolve('./app'), 'node_modules'],
    //root: path.resolve('./app'),
    extensions: [
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
  }
}








const developmentConfig = {
  //devtool: 'cheap-module-inline-source-map',
  devServer: {
    inline: true,
    progress: true,
    historyApiFallback: true,
    contentBase: PATHS.build,
    hot: true,
  },
  plugins: [ htmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

/*
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
})
*/
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})


const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins:[
    htmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
   // new config.optimization ({ sourceMap: true, minimize: true })
  ]
}

export default Object.assign({}, config, isProduction === true ? productionConfig : developmentConfig)