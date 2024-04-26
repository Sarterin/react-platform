import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import type { Configuration } from 'webpack'
import type { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const PORT = env.port || 3000
  const mode = env.mode || 'development'

  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
}
