import path from 'path';
import {
  type WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshWebpackPlugin from 'react-refresh-webpack-plugin'
// Visualize size of webpack output files;
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    // сообщаем вебпаку, где лежит index.html, и куда нужно вставлять наши js скрипты
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    // позволет отслеживать прогресс, время, процент процесса сборки
    new ProgressPlugin(),
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV: JSON.stringify(isDev),
    }),
    // new ReactRefreshWebpackPlugin(), 
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }));
  };

  return plugins; 
}
