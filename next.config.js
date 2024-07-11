const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  output: 'export',
  basePath: process.env.BASE_PATH ?? '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})