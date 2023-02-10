import { type RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  // Если не используем тайпскрипт, то нужен babel-loader
  const typeScriptLoader = {
    // указываем расширения файлов, котрые нужно пропустить через loader
    test: /\.tsx?$/,
    // указываем loader, через который необходимо прогонять наши файлы, оторбранные по расширению
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const svgLoader = {
    test: /\.svg$/,
    oneOf: [
      {
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack']
      }
    ]
  }

  // const fileLoader =  {
  //   test: /\.(png|jpe?g|gif)$/i,
  //   type: 'asset/resource'
  // };

  const styleLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: Boolean((resourcePath: string) =>
              Boolean(resourcePath.includes('.module.'))
            ),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  const babelLoader = {
    test: /\.m?(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  // Важно добавлять Loaders в нужном порядке
  return [
    svgLoader,
    // babelLoader must be before typeScriptLoader
    babelLoader,
    typeScriptLoader,
    styleLoader
  ]
}
