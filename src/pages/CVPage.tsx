import React from 'react';

const CV_PDF_PATH = '/src/assets/RAGILIAWAN_PUTRA_RENCANA_CV.pdf';

const CVPage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV_PDF_PATH;
    link.download = 'RagiliawanPutraRencana_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black py-20 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">Curriculum Vitae</h1>
      <div className="w-full max-w-4xl bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-800">
        <div className="w-full h-[70vh] flex items-center justify-center">
          <embed
            src={CV_PDF_PATH}
            type="application/pdf"
            className="w-full h-full rounded-lg border border-gray-300 dark:border-gray-700 shadow"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-black rounded-lg hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Download PDF
          </button>
        </div>
        <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          If the PDF preview does not appear, you can still download and view it directly.
        </p>
      </div>
    </section>
  );
};

export default CVPage; 