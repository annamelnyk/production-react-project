import { type Configuration } from 'webpack'
import path from 'path'

import { buildPlugins } from './buildPlugin'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

import { type BuildOptions } from './types/config'

export function buildWebpackConfig (options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options
  const isModeDevelopment = mode === 'development'

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      // [contenthash] - при изменении файла генерирует новый hash, чтобы файл обновился и сгенерировался заново
      // (иначе вебпак достанет из кеша прежнюю версию)
      filename: '[name][contenthash].js',
      // очищает от более неактуальных сгенерированных файлов
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    // указываем типы файлов, при импорте которых мы не будем указывать расширения. За это отвечают resolve -> extentions
    resolve: buildResolvers(options),
    // Plugins are the backbone of webpack. Webpack itself is built on the same plugin system that you use in your webpack configuration!
    // They also serve the purpose of doing anything else that a loader cannot do. Webpack provides many such plugins out of the box.
    // A webpack plugin is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.
    plugins: buildPlugins(options),
    // (карта исходного кода) - нужны в процессе разработки. Без source-map при ошибке в коде, ссылка будет на bundle файл, а с ними 
    // - на определенный, конкретный файл, в котором произошла ошибка. Необходимый инструмент для debugging.
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }

  // LOADERS: Loaders are transformations that are applied to the source code of a module.
  // They allow you to pre-process files as you import or “load” them.
  // Thus, loaders are kind of like “tasks” in other build tools and provide a powerful way to handle front-end build steps.
  // Loaders can transform files from a different language (like TypeScript) to JavaScript or load inline images as data URLs.
  // Loaders even allow you to do things like import CSS files directly from your JavaScript modules!
}
