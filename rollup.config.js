// rollup.config.js
import typescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'

const pkg = require('./package')

export default {
  input: pkg.config.src,
  moduleName: pkg.config.moduleName,
  output: {
    file: pkg.main,
    format: 'iife'
  },
  sourcemap: true,
  plugins: [
    typescript({
      typescript: require('typescript'), // use local version
      outDir: 'dist',
      rootDir: 'src',
      module: 'es6',
      target: 'es6',
      declaration: false,
      removeComments: true,
      lib: [
        'dom',
        'es6'
      ]
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      browser: true,
      extensions: [ '.js', '.json' ],
      preferBuiltins: false
    })
  ]
}
