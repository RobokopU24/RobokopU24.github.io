interface Tool {
  title: string;
  link: string;
  description: string;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;

  export const tools: Tool[];
}