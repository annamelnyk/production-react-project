import { RuleSetRule, type Configuration } from 'webpack';
import path from 'path';

import { type BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';

const buildSvgLoader = () => ({
  test: /\.svg$/,
  oneOf: [
    {
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ['@svgr/webpack'],
    },
  ],
});

export default ({ config }: {config: Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('ts', 'tsx');
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: (/\.svg$/i),
      };
    }

    return rule;
  });
  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader(true));

  return config;
};
