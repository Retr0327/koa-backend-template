import * as path from "path";
import * as webpack from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import nodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "src"),
  entry: ["./server.ts"],
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", "js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  node: {
    __dirname: true,
  },
  target: "node",
  output: {
    publicPath: "dist",
    filename: "server.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [new NodePolyfillPlugin()],
};

export default config;
