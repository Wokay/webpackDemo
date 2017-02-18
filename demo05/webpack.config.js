/**
 * Created by 赵天 on 2017/2/18.
 */
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10000' }
        ]
    }
};