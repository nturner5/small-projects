module.exports = {
  //where to start 
  entry:{ 
    main: './DayTwo.js'
  },
  //Where to put it
  output: {
    filename: 'bundle.js',
    path: './public'
  },
  //how
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
    ]
  }
} //end of module.exports


