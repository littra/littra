/**
 * COMMON WEBPACK CONFIGURATION
 */
 console.log(process.env.BASE_PATH)
 const path = require("path");
 const webpack = require("webpack");
 const CleanWebpackPlugin = require("clean-webpack-plugin");
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
 module.exports = options => ({
   entry: './src/index.js',
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /(node_modules|bower_components)/,
         loader: "babel-loader",
         options: {
           babelrc: false,
           presets: ["@babel/preset-env", "@babel/preset-react"],
           plugins: [
             require("@babel/plugin-proposal-class-properties"),
             require("@babel/plugin-proposal-object-rest-spread"),
             require("@babel/plugin-syntax-dynamic-import"),
             require("react-loadable/babel"),
             require("@babel/plugin-transform-runtime")
           ]
         }
       },
       
 
       {
         test: /\.css$/i,
         use: [MiniCssExtractPlugin.loader, 
           {
           loader:"css-loader",
           options: {
             modules: true,
           },
         }
         ],
         
       },
       
       
     ]
   },
   optimization: {
     splitChunks: {
         cacheGroups: {
             commons: {
                 test: path.resolve('node_modules'),
                 name: 'vendor',
                 chunks: 'all',
                 
             },
             materialize: {
                 test: path.resolve('src/AppBundle/Resources/js/Vendor'),
                 name: 'vendor',
                 chunks: 'all'
             }
         }
     }
 },
   resolve: { extensions: ["*", ".js", ".jsx"] },
   output: options.output,
   devServer: options.devServer ? options.devServer : {},
   plugins: options.plugins.concat([
     new webpack.ProvidePlugin({
       // make fetch available
       fetch: "exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd"
     }),
   //  new webpack.optimization.moduleIds: 'named',
     // clearing dist folder before making new build
     new CleanWebpackPlugin([path.join(process.cwd(), "/dist")], {
       root: process.cwd()
     }),
     new MiniCssExtractPlugin({
       filename: "[name].css",
       chunkFilename: "[name]-[hash].css"
     }),
     
      new webpack.DefinePlugin({
       "process.env": {
         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
         BASE_PATH: JSON.stringify(process.env.BASE_PATH),
         ASSETS_CDN_PATH: JSON.stringify(process.env.ASSETS_CDN_PATH),
         STAGE: JSON.stringify(process.env.STAGE),
         POST_API_ENCRYPTION_KEY: JSON.stringify(
           process.env.POST_API_ENCRYPTION_KEY
         )
       }
     })
     // new BundleAnalyzerPlugin()
   ]),
   devtool: options.devtool,
   target: "web", // Make web variables accessible to webpack, e.g. window
   performance: options.performance || {}
 });
 