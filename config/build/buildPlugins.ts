import HTMLWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import type { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin()
  ]
}