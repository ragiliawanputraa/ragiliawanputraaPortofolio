import React, { useState } from 'react';
import { Download, FileText, AlertCircle } from 'lucide-react';

// Path untuk file CV di folder public
const CV_PDF_PATH = '/RagiliawanPutra_CV.pdf';

const CVPage: React.FC = () => {
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV_PDF_PATH;
    link.download = 'RagiliawanPutraRencana_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            View and download my professional resume
          </p>
        </div>

        {/* CV Container */}
        <div className="bg-gray-50 dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* PDF Viewer */}
          <div className="relative">
            {!pdfError ? (
              <div className="w-full h-[80vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <iframe
                  src={`${CV_PDF_PATH}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-0"
                  title="CV Preview"
                  onError={handlePdfError}
                />
              </div>
            ) : (
              <div className="w-full h-[80vh] flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
                <AlertCircle className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  PDF Preview Not Available
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-6 max-w-md">
                  The PDF preview cannot be displayed in your browser. 
                  Please download the file to view it.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-black rounded-lg hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Download size={20} className="mr-2" />
                    Download CV
                  </button>
                  <button
                    onClick={() => window.open(CV_PDF_PATH, '_blank')}
                    className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 font-semibold"
                  >
                    <FileText size={20} className="mr-2" />
                    Open in New Tab
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-black rounded-lg hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={24} className="mr-2" />
                Download PDF
              </button>
              
              <button
                onClick={() => window.open(CV_PDF_PATH, '_blank')}
                className="inline-flex items-center px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FileText size={24} className="mr-2" />
                Open in New Tab
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                📄 Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              💡 <strong>Tip:</strong> If the PDF doesn't display properly, try downloading it or opening in a new tab. 
              Some browsers may have restrictions on displaying PDFs inline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVPage;