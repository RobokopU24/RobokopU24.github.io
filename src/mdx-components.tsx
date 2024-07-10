import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h3>{children}</h3>,
    h2: ({ children }) => <h4>{children}</h4>,
    h3:  ({ children }) => <h5>{children}</h5>,
    h4:  ({ children }) => <h6>{children}</h6>,
    ul: ({children}) => <ul style={{marginLeft: '1.5rem'}}>{children}</ul>,
    ...components,
  }
}
