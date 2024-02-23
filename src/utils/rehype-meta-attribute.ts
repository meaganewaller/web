import { visit } from 'unist-util-visit';
import { Node } from 'unist';

const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

interface Options {
  [key: string]: any; // Define your options type here
}

const rehypeMetaAttribute = (options: Options = {}) => {
  return (tree: Node) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node: Node, index: number, parentNode: Node) {
    let match;

    if (node.tagName === 'code' && node.data && node.data.meta) {
      re.lastIndex = 0; // Reset regex.

      while ((match = re.exec(node.data.meta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || '';
        if (parentNode.properties) {
          parentNode.properties[match[1]] = match[2] || match[3] || match[4] || '';
        }
      }
    }
  }
};

export default rehypeMetaAttribute;
