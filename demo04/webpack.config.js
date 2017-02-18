/**
 * Created by 赵天 on 2017/2/18.
 */
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
            {
                test: /\.useable\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            useable: true
                        },
                    },
                    { loader: "css-loader" },
                ],
            },
        ],
    },
};