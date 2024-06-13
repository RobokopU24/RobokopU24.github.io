const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
}

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})

  