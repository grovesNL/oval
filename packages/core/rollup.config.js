import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
const pkg = require('./package.json')

export default {
    entry : `compiled/oval.js`,
    targets : [
        {
            dest: pkg.main,
            moduleName: 'oval',
            format: 'umd'
        }, {
            dest: pkg.module,
            format: 'es'
        }
    ],
    sourceMap : true,
    external : [],
    plugins : [commonjs(), resolve()]
}
