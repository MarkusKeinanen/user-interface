const HtmlWebpackPlugin = require('html-webpack-plugin')

function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename
      }
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers')
      }
    }
  ]
}

module.exports = [
  {
    entry: './inputpage.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-inputpage.js'
    },
    module: {
      rules: [
        {
          test: /inputpage.scss$/,
          use: getStyleUse('bundle-inputpage.css')
        }
      ]
    }
  },
  {
    entry: './index.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-index.js'
    },
    module: {
      rules: [
        {
          test: /index.scss$/,
          use: getStyleUse('bundle-index.css')
        }
      ]
    }
  },
  {
    entry: './inputpage.js',
    output: {
      filename: 'bundle-inputpage.js'
    },
    module: {
      loaders: [
        {
          test: /inputpage.js$/,
          loader: 'babel-loader',
          query: { presets: ['env'] }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './inputpage.html',
        chunks: ['./inputpage.js'],
        filename: 'inputpage.html'
      })
    ]
  },
  {
    entry: './index.js',
    output: {
      filename: 'bundle-index.js'
    },
    module: {
      loaders: [
        {
          test: /index.js$/,
          loader: 'babel-loader',
          query: { presets: ['env'] }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        chunks: ['./index.js'],
        filename: 'index.html'
      })
    ]
  }
]
