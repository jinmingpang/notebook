import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './index.less';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function Sample() {
  const [file, setFile] = useState('./data-struct-exercise.pdf');
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <Layout title="PDF预览" description="Hello React Page">
      <div className="pdf-wrap">
        <div className="pdf-container">
          <ul>
            <li>缩放</li>
            <li>页数</li>
          </ul>
          <div className="pdf-document">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              <Page key={`page_${1}`} scale={1.5} pageNumber={1} />
            </Document>
          </div>
        </div>
      </div>
    </Layout>
  );
}
