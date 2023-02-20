import { type RuleSetRule } from 'webpack';

import { type BuildOptions } from './types/config';
import buildCssLoader from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  // Если не используем тайпскрипт, то нужен babel-loader
  const typeScriptLoader = {
    // указываем расширения файлов, котрые нужно пропустить через loader
    test: /\.tsx?$/,
    // указываем loader, через который необходимо прогонять наши файлы, оторбранные по расширению
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    oneOf: [
      {
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
    ],
  };

  // const fileLoader =  {
  //   test: /\.(png|jpe?g|gif)$/i,
  //   type: 'asset/resource'
  // };

  const styleLoader = buildCssLoader(isDev);

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
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  // Важно добавлять Loaders в нужном порядке
  return [
    svgLoader,
    // babelLoader must be before typeScriptLoader
    babelLoader,
    typeScriptLoader,
    styleLoader,
  ];
}
