import webpackPreprocessor from '@cypress/webpack-preprocessor';

const config: Cypress.ConfigOptions = {
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        webpackPreprocessor({
          webpackOptions: {
            resolve: {
              extensions: ['.ts', '.js'],
            },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: 'ts-loader',
                      options: { configFile: 'tsconfig.json' },
                    },
                  ],
                },
              ],
            },
          },
          watchOptions: {},
        })
      );
    },
  },
};

export default config;
