// 导入原映射
import MDXComponents from '@theme-original/MDXComponents';
import Text from '@site/src/components/text';
import Box from '@site/src/components/box';
import Mermaid from '@site/src/components/mermaid';
import Markmap from '@site/src/components/markmap';

export default {
  // 复用默认的映射
  ...MDXComponents,
  t: Text,
  box: Box,
  mermaid: Mermaid,
  markmap: Markmap,
};
