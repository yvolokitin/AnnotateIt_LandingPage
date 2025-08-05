const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'assets/images/[name].[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[contenthash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'AnnotateIt - Vision Annotation Tool',
      meta: {
        description: 'A powerful vision annotation platform for creating high-quality training datasets for machine learning models.',
        keywords: 'annotation, computer vision, machine learning, dataset, image labeling, bounding box, polygon, classification',
        viewport: 'width=device-width, initial-scale=1',
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/index.html'], // skip copying index.html
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
    ],
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
};