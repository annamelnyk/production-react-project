import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (isDev: boolean) => {
  return {
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
              Boolean(resourcePath.includes('.module.')),
            ),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
};
