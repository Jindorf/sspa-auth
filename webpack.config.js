const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "single-spa-auth-app",
  entry: "./src/main.js",
  mode: "development",
  output: {
    library: "single-spa-auth-app",
    libraryTarget: "umd",
    filename: "single-spa-auth-app.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: path.resolve(__dirname + "/node_modules/"),
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new HtmlWebpackPlugin(),
    new StandaloneSingleSpaPlugin({
      appOrParcelName: "sspa-auth",
      activeWhen: ["/"],
    }),
  ],
  externals: ["bootstrap", "bootstrap-vue", "single-spa-vue", "vue", "vue-router", "vuex"],
};
