// 导入原映射
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/highlight';
import Text from '@site/src/components/text';
import Mermaid from '@site/src/components/mermaid';
import Markmap from '@site/src/components/markmap';

export default {
  // 复用默认的映射
  ...MDXComponents,
  // 把 "highlight" 标签映射到我们的 <Highlight /> 组件！
  // `Highlight` 会收到在 MDX 中被传递给 `highlight` 的所有 props
  highlight: Highlight,
  t: Text,
  mermaid: Mermaid,
  markmap: Markmap,
};