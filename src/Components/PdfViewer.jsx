import React, { useState } from 'react';
import '../App.css';
import PdfFile from './PdfFile';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

function PdfViewer() {
  const [view, setView] = useState(false);
  return (
    <div className='root'>
      <div className='header'>
        <button
          className='button_slide slide_down'
          onClick={() => setView(!view)}
        >
          {view ? 'Hide Pdf' : 'View PDF'}
        </button>
        <button style={{ border: 'none' }}>
          <PDFDownloadLink
            document={<PdfFile />}
            filname={'sales_order.pdf'}
            className='button_slide slide_down'
          >
            {({ blob, url, loading, error }) =>
              loading
                ? error
                  ? `${error}`
                  : 'Loading document...'
                : 'Download PDF'
            }
          </PDFDownloadLink>
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        {view && (
          <PDFViewer height={800} width={800}>
            <PdfFile />
          </PDFViewer>
        )}
      </div>
    </div>
  );
}

export default PdfViewer;
