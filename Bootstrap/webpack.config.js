/// webpack.config.js
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const extractSass = new ExtractTextPlugin({
  filename: "styles.css"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader?importLoaders=1",
          fallback: "style-loader"
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: extractSass.extract({
          fallback: "style-loader",
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery", // Used for Bootstrap JavaScript components
      jQuery: "jquery", // Used for Bootstrap JavaScript components
      Popper: ["popper.js", "default"] // Used for Bootstrap dropdown, popup and tooltip JavaScript components
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     // async: true,
    //     children: true,
    //      filename: "commonlazy.js"
    //   }),
    extractSass
  ]
};
