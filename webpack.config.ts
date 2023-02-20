// webpack работает в среде NodeJS. Нам доступен страндлартны модуль PATH, котрый поможет резолвить путь.
// Не нужно хардкодить пути тк в разных ОС пути работают по разному. Используем PATH.
// path.resolve() - склеивает участки пути: (__dirname - это папка в которой мы находимся сейчас, а далее участки пути через запятую) 
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfiq';
import {
  type BuildPaths,
  type BuildMode,
  type BuildEnv,
} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev: boolean = mode === 'development';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    open: true,
  });

  return config;
};
