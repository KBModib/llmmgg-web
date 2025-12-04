// src/components/PdfViewer.tsx
import * as React from 'react';
import * as pdfjs from 'pdfjs-dist'

// Import the core and default layout modules
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the necessary styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';
/**
 * Interface defining the props for the PdfViewer component.
 * We only expect a fileUrl string.
 */
interface PdfViewerProps {
  /** The URL or path to the PDF file to be displayed. */
  fileUrl: string;
}

/**
 * A component to display a PDF file using react-pdf-viewer, written in TypeScript.
 */
const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  // Create an instance of the default layout plugin
  const defaultLayout = defaultLayoutPlugin();

  return (
    <div
      style={{
        height: '750px', // Recommended to set a fixed height for the container
        margin: 'auto',
      }}
      className='w-280 mx-auto mb-10'
    >
      <Viewer 
        fileUrl={fileUrl} // Pass the PDF file URL here
        plugins={[
          defaultLayout, // Apply the default layout plugin
        ]}
      />
    </div>
  );
};

export default PdfViewer;