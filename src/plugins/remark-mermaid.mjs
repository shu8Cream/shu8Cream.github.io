import { visit } from 'unist-util-visit';

/**
 * Remark plugin to convert mermaid code blocks to div with class 'mermaid'
 */
export function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang === 'mermaid') {
        const value = node.value;
        
        // メタデータに 'code' が含まれている場合は変換をスキップし、
        // 通常のコードブロックとして表示させる（Expressive Codeなどが処理する）
        if (node.meta && node.meta.includes('code')) {
          return;
        }

        parent.children.splice(index, 1, {
          type: 'html',
          value: `<div class="mermaid">${value}</div>`,
        });
      }
    });
  };
}
