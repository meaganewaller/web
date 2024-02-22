import { visit } from 'unist-util-visit';

export default function rehypeRaw() {
  return (tree: any) => {
    visit(tree, 'raw', (node: any) => {
      if (node.type === 'raw') {
        const brRegex = /<br\s*\/?>/g;
        if (brRegex.test(node.value)) {
          const el = node;

          el.children = [];
          el.tagName = 'br';
          el.properties = {};
          el.type = 'element';
        }
      }
    });
  }
}
