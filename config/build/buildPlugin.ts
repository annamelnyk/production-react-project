import path  from 'path'; 
import {
  WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshWebpackPlugin from 'react-refresh-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    // сообщаем вебпаку, где лежит index.html, и куда нужно вставлять наши js скрипты
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    // позволет отслеживать прогресс, время, процент процесса сборки
    new ProgressPlugin(),
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV: JSON.stringify(isDev),
    }),
    new HotModuleReplacementPlugin(),
    // new ReactRefreshWebpackPlugin(),
  ]
}
