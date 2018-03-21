const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevConfig = require('../config/webpack-dev.config');
const webpackProdConfig = require('../config/webpack-prod.config');
const webpackHotMiddleware = require('webpack-hot-middleware');

const mode = process.argv[2];
let config;
let compiler;
const express = require('express');
const app = express();

const devWebpackPort = 3000;



if(mode === "dev") {
process.env.NODE_ENV = 'development';
compiler = webpack(webpackDevConfig);
const hotMiddleware = webpackHotMiddleware(compiler);
app.use(hotMiddleware);


app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath
}));

app.use(hotMiddleware);

app.get("*",express.static(webpackDevConfig.output.path));

// Serve the files on port 3000.
app.listen(devWebpackPort, function () {
  console.log(`Example app listening on port ${devWebpackPort}\n`);
});

}



//npm i webpack-dev-middleware -D





// if (mode ==='dev') {

//  webpackDevConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/","webpack/hot/dev-server");
// config =  webpackDevConfig;
// }

// else if (mode === 'prod') {
//     config = webpackProdConfig;
// }
// const compiler = webpack(config);
// // const server = new WebpackDevServer(compiler);
// // server.listen(8080);
    
//     // compiler.run((err, stats) => {
    
//     //     if (err || stats.hasErrors()) {
//     //       // Handle errors here

//     //       console.log(stats.toString({
    
//     //         chunks: false,  // Makes the build much quieter
    
//     //         colors: true    // Shows colors in the console
    
//     //       }));
    
//     //     }
    
//     //     // Done processing

//     //     if(mode === 'dev') {
//     //     //  const server = new WebpackDevServer(compiler);
//     //     //  server.listen(8080,()=>{console.log("webpack server started on 8080")});
//     //     }
//     //   });


//     const watching = compiler.watch({
//         /* watchOptions */
//       }, (err, stats) => {
//         // Print watch/build result here...
//         console.log(stats);
//       });