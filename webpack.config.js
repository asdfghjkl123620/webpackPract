var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //項目的文件夾 可以直接使用文件夾名稱 默認會找index.js 也可以確定是哪個文件名字
  entry:APP_PATH,
  //輸出的文件名，合併以後的js命名為bundle.js
  output: {
      path: BUILD_PATH,
      filename:'bundle.js'
  },
  devServer:{
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
},
// module: {
//     loaders: [
//       {
//         test: /\.css$/,
//         loaders: ['style', 'css'],
//         include: APP_PATH
//       }
//     ]
//   },
module: {
    rules:  [
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: APP_PATH
        },
        {
            test: /\.(png|jpg)$/,
            use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                  },
                },
              ],

        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
    ]
},
  //添加插劍會自動生成一個html文件
  plugins: [
      new HtmlwebpackPlugin({
          title:'Hello World app'
      })
  ],

};