import vue from 'rollup-plugin-vue';
// import css from 'rollup-plugin-css-only';
import ts from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import { name } from './package.json'

const file = type => `lib/index.${type}.js`
const overrides = {
  compilerOptions: { declaration: false }, // 生成.d.ts的文件
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"] 
}


export { name, file }
export default {
  input: 'packages/SuperFilter/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    resolve(),
    ts({ tsconfigOverride: overrides }),
    vue(),
    postcss({
        extensions: [ '.css', '.scss' ],
        extract:'index.css'
    }),
  ],
  external: ['vue', 'lodash-es'] // 规定哪些是外部引用的模块
}
