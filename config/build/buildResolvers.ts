import { type ResolveOptions } from 'webpack'

import { type BuildOptions } from './types/config'

// A resolver is a library which helps in locating a module by its absolute path
// resolvers согласует webpak с тем, что указано в tsconfig
export function buildResolvers (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // для каждого модуля главным файлом является - index
    mainFiles: ['index'],
    // Create aliases to import or require certain modules more easily
    alias: {}
  }
}
