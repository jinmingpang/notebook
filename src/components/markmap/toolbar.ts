import { Toolbar } from 'markmap-toolbar';
import utils from './utils';
import style from './index.module.less';

import 'markmap-toolbar/dist/style.css';

const addToolbar = ($wrap, mm: any) => {
  console.log('====>mm', mm);
  window.mm = mm;
  const toolbar = new Toolbar();
  // console.log('==>mm', mm);
  toolbar.setBrand(false);
  toolbar.setItems([
    'allClose',
    'allOpen',
    'recurse',
    'zoomNormal',
    'fit',
    'zoomIn',
    'zoomOut',
  ]);
  toolbar.attach(mm);
  toolbar.register({
    id: 'zoomNormal',
    title: 'Zoom out',
    content: Toolbar.icon(
      'M182.032,167.936v1.571219h-4.141567v8.428781h-1.716867v-8.428781h-4.141567v-1.571219h10Z',
      { transform: 'translate(-167.032-162.936)' },
    ),
    onClick: () => {
      utils.toolActions.zoomNormal(mm);
    },
  });
  toolbar.register({
    id: 'allClose',
    title: 'Close all',
    content: Toolbar.icon(
      'M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z',
      {
        transform:
          'matrix(1.001583-.000751 0.000738 0.983607-80.544423-246.735547)',
      },
    ),
    onClick: () => {
      utils.toolActions.allClose(mm);
    },
  });
  toolbar.register({
    id: 'allOpen',
    title: 'Open all',
    content: Toolbar.icon(
      'M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z',
      {
        transform:
          'matrix(-1.001579-.00299-.002937 0.983603 101.118148-246.532487)',
      },
    ),
    onClick: () => {
      utils.toolActions.allOpen(mm);
    },
  });
  const $toolbar: any = toolbar.render();
  $toolbar.classList.add(style.toolbar);
  $wrap.current.append($toolbar);
};

export default {
  addToolbar,
};
