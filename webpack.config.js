const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  optimization: {
    usedExports: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jsx|js|json)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpeg|jpg|gif|svn)?$/i,
        type: "assets",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
