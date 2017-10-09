module.exports = {
  
  // This code will be compiled 
  //This directory contains two examples built with React. Swap entry: the path with either "./server.js" or "./app.js". First run webpack and then run  node server.js.
  entry: "./setState.js",

  // Then output into this file
  output: {
    filename: "public/test.bundle.js"
  },


  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // These are the specific transformations we'll be using. 
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}

