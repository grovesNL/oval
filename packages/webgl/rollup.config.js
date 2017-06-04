import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
const pkg = require('./package.json')

export default {
    entry : `compiled/webgl.js`,
    targets : [
        {
            dest: pkg.main,
            moduleName: 'oval.webgl',
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
