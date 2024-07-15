import nextMdx from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'frontmatter' }]],
    rehypePlugins: []
  },
})

export default withMdx({
  output: 'export',
  basePath: process.env.BASE_PATH ?? '',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})