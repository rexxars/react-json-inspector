import {defineConfig} from '@sanity/pkg-utils'
import {exports as rawExports} from './package.json'

const {'.': rootExport} = rawExports

export default defineConfig({
  // the path to the tsconfig file for distributed builds
  tsconfig: 'tsconfig.dist.json',
})
