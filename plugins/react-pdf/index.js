const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const pdfDir = path.resolve(__dirname, '../../static/pdfs');

module.exports = function (context, options) {
  return {
    name: 'react-pdf',
    configureWebpack(config, isServer, utils) {
      const cMapsDir = path.join(
        path.dirname(require.resolve('pdfjs-dist/package.json')),
        'cmaps',
      );
      const standardFontsDir = path.join(
        path.dirname(require.resolve('pdfjs-dist/package.json')),
        'standard_fonts',
      );

      return {
        plugins: [
          new CopyWebpackPlugin({
            patterns: [
              { from: pdfDir },
              { from: cMapsDir, to: 'cmaps/' },
              { from: standardFontsDir, to: 'standard_fonts/' },
            ],
          }),
        ],
      };
    },
  };
};
