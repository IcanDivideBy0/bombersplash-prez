const webpack = require("webpack");
const { getBabelLoader } = require("react-app-rewired");

module.exports = (config, env) => {
  const babelLoader = getBabelLoader(config.module.rules);

  config.module.rules.forEach(rule => {
    if (typeof rule.test !== "undefined" || typeof rule.oneOf === "undefined")
      return;

    rule.oneOf.unshift(
      {
        test: /\.(glsl|frag|vert)$/,
        use: [require.resolve("raw-loader"), require.resolve("glslify-loader")],
      },
      {
        test: /\.mdx$/,
        use: [
          {
            loader: babelLoader.loader,
            options: babelLoader.options,
          },
          require.resolve("mdx-deck/loader"),
        ],
      }
    );
  });

  if (env === "production") {
    config.plugins = config.plugins.filter(
      plugin => !(plugin instanceof webpack.optimize.UglifyJsPlugin)
    );
  }

  return config;
};
