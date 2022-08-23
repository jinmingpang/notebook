const onResolveNmMmData = (root) => {
  const base = 'https://newdocs.phaser.io/docs/3.55.2';
  const travel = (data, path = '') => {
    const content = data.content || '';
    const curr = `${path ? `${path}.` : ''}${content}`;
    data.content = `${data.content}
    <a class="link" target="_blank" href="${base}/${curr}" title="跳转到文档">
    <svg t="1661262121752" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1211" width="48" height="48"><path d="M338.10205963 171.66367121v82.85044939H156.93574322v607.56996171h662.80359505V544.49069343h82.8504494V862.08408231a82.85044939 82.85044939 0 0 1-82.8504494 82.85044938H156.93574322a82.85044939 82.85044939 0 0 1-82.8504494-82.85044938V254.5141206a82.85044939 82.85044939 0 0 1 82.8504494-82.85044939h181.16631641z m434.77154069-113.80890106l195.27850919 195.25089281-205.02724454 205.05486222-58.60288539-58.57526772L794.35948438 309.74775265H695.4636642c-157.52632066 0-285.72358353 125.60128126-289.86610601 282.13339783L405.48709137 599.72432549v110.46726671h-82.85044939v-110.46726671C322.63664198 393.81334239 489.5526811 226.89730328 695.4636642 226.89730328h129.27431742l-110.43964904-110.46726542 58.57526774-58.57526771z" p-id="1212"></path></svg>
    </a>`;
    if (data.children) {
      data.children.forEach((item) => {
        travel(item, curr);
      });
      return;
    }
  };
  travel(root);
};

const mmCss = `
.link {
  display: inline-block;
  vertical-align: bottom;
  line-height: 1;
}
.link svg {
  width: 16px;
  height: 16px;
  fill: #888;
}
.link svg:hover {
   fill: #0097e6;
}

`;

export default {
  onResolveNmMmData,
  mmCss,
};
