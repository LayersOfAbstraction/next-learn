const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "app/App.css"),
  entry: path.resolve(__dirname, "components/socialicons/style.css"),
  entry: path.resolve(__dirname, "components/themetoggle/style.css"),
  entry: path.resolve(__dirname, "header/style.css"),
  entry: path.resolve(__dirname, "index.css"),  
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-flexbugs-fixes",
                  "postcss-hover-media-feature",
                  "postcss-nested",
                  [
                    "postcss-preset-env",
                    {
                      autoprefixer: { flexbox: "no-2009" },
                      stage: 3,
                      features: { "custom-properties": false },
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".css"],
  },
  performance: { hints: false },
  optimization: { runtimeChunk: false },
};