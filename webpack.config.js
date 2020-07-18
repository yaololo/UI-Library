const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const devMode = env.NODE_ENV !== "production";
  const loaderPath = path.resolve(__dirname, "src");
  const port = process.env.PORT;

  return {
    // webpack will take the files from ./src/index
    entry: ["@babel/polyfill", "./src/index.tsx"],
    devtool: "inline-source-map", // debugging
    mode: devMode ? "development" : "production",
    devServer: {
      contentBase: "/dist",
      port: port ? port : 3000,
      historyApiFallback: true
    },

    // and output it into /dist as bundle.js
    output: {
      // `filename` provides a template for naming your bundles (remember to use `[name]`)
      filename: "[name].bundle.js",
      // `chunkFilename` provides a template for naming code-split bundles (optional)
      chunkFilename: "[name].bundle.js",
      // `path` is the folder where Webpack will place your bundles
      path: path.join(__dirname, "/dist")
      // `publicPath` is where Webpack will load your bundles from (optional)
      // publicPath: "dist",
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // we use babel-loader to load our jsx and tsx files
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },

        // css-loader to bundle all the css files into one file and style-loader to add all the styles inside the style tag of the document
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          sideEffects: true
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          include: loaderPath,
          use: ["file-loader"]
        }
      ]
    },
    optimization: {
      splitChunks: {
        // It's for splitting vendor code and your code
        chunks: "all", // Extract common dependency to a separate bundle
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      },
      runtimeChunk: "single" // Split runtime code into a separate chunk, the bare minimum file to get the app running, other thing into chunks
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
      })
    ]
  };
};
