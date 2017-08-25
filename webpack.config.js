module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'] //<--- 'react-hot' only for dev
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {                    //<--- only for dev
        historyApiFallback: true,
        contentBase: './'
    }
};
