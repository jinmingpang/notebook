# MD语法介绍

## 资料文档

- [基础文档](https://markdown.com.cn/cheat-sheet.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95)
- [mermaid画图](https://mermaid-js.github.io/mermaid/#/n00b-gettingStarted?id=_1-using-the-live-editor)

## 语法

### 基本语法

- **标题（Heading）**
  - `# H1`
  - `## H2`
  - `### H3`
- **粗体（Bold）**: `**bold text**`
- **斜体（Italic）** `*italicized text*`
- **斜粗体（Italic 粗体（Bold））** `***italicized text***`
- **引用块（Blockquote）** `> blockquote`
- **有序列表（Ordered List）**
  - `1. First item`
  - `2. Second item`
  - `3. Third item`
- **无序列表（Unordered List）**
  - `- First item`
  - `- Second item`
  - `- Third item`
- **代码（Code）**  ``code``
- **分隔线（Horizontal Rule）**
  - `---`
  - `***`
  - `___`
  - 提示：
    - 单独一行
    - 为了兼容性，请在分隔线的前后均添加空白行
- **链接（Link）**
  - `[title](https://www.example.com)`
  - `<www.ovine.groupe.com>`
- **图片（Image）**
  - `![alt text](image.jpg "title")`
  - `[![图片](image.jpg "Shiprock")](https://markdown.com.cn)`

### 扩展语法

- **删除线（Strikethrough）** `~~The world is flat.~~`

- **表格（Table）**

  - ```
    | Syntax      | Description | Mark  |
    | :---        |    :----:   |  ---: |
    | ----------- | ----------- | ----- |
    | Header      | Title       | Mark  |
    | Paragraph   | Text        | Mark  |
  ```

- **代码块（Fenced Code Block）**

  - ```
      \```
      {
          "firstName": "John",
          "lastName": "Smith",
          "age": 25
      }
      \```
      \
  ```

- **脚注（Footnote）**
  - `Here's a sentence with a footnote. [^1]`
  - `[^1]: This is the footnote.`
- **标题编号（Heading ID）** `### My Great Heading {#custom-id}`

- **定义列表（Definition List）**

  - ```
      term
      : definition
  ```

- **任务列表（Task List）**

  ```
      - [x] Write the press release
      - [ ] Update the website
      - [ ] Contact the media
  ```

- **内嵌HTML**

- `This **word** is bold. This <em>word</em> is italic.`

  ```
      This is a regular paragraph.

      <table>
          <tr>
              <td>Foo</td>
          </tr>
      </table>

      This is another regular paragraph.
  ```
