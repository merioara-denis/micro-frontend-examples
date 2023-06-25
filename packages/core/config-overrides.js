const { ModuleFederationPlugin } = require("webpack").container;
const { name } = require("./package.json");
const { dependencies } = require("./../../package.json");

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: name,
        remotes: {
          microfront: "microfront@http://localhost:3001/entry.js",
        },
        filename: "entry.js",
        exposes: {},
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
            eager: true,
          },
          "react-dom": {
            requiredVersion: dependencies["react-dom"],
            singleton: true,
            eager: true,
          },
        },
      })
    );

    return config;
  },
};
