// @flow
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*::
type Target = {|
    name: string, // the name of output JS/CSS
    entry: string, // the path to the entry point
    library?: string // the name of the exported module
|};
*/

/**
 * List of targets to build
 */
const targets /*: Array<Target> */ = [
    {
        name: 'katex-copytex',
        entry: './src/katex-copytex.webpack.js'
    }
];

/**
 * Create a webpack config for given target
 */
function createConfig(target /*: Target */, dev /*: boolean */,
    minimize /*: boolean */) /*: Object */ {
    const cssLoaders /*: Array<Object> */ = [{loader: 'css-loader'}];
    if (minimize) {
        cssLoaders[0].options = {importLoaders: 1};
        cssLoaders.push({
            loader: 'postcss-loader',
            options: {plugins: [require('cssnano')()]},
        });
    }

    return {
        mode: dev ? 'development' : 'production',
        context: __dirname,
        entry: {
            [target.name]: target.entry,
        },
        output: {
            filename: minimize ? '[name].min.js' : '[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        ...cssLoaders,
                    ],
                }
            ],
        },
        plugins: [
            !dev && new MiniCssExtractPlugin({
                filename: minimize ? '[name].min.css' : '[name].css',
            }),
        ].filter(Boolean),
        devtool: dev && 'inline-source-map',
        optimization: {
            minimize,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            ascii_only: true,
                        },
                    },
                }),
            ],
        },
        performance: {
            hints: false,
        },
    };
}

module.exports = {
    targets,
    createConfig,
};
