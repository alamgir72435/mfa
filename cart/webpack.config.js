

const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode:"development",
    devServer:{
        port: 8082
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"cart",
            filename:"remoteEntry.js",
            exposes:{
                './CartShow':"./src/index",
                // other exposes
            },
            shared:['faker']
            // shared:{
            //     faker:{
            //         singleton
            //     }
            // }
        }),
        new HtmlWebPackPlugin({
            template:"./public/index.html"
        })
    ]
}