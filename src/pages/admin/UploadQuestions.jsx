import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const UploadQuestions = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadStatus('success');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10">
        <h1 className="text-xl font-bold">Upload Questions</h1>
        <p className="text-xs text-gray-400 mt-1">Bulk upload quiz questions to the question bank using CSV/Excel templates.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0f1117] text-white p-6 rounded-2xl border border-white/10 space-y-6">
          <h2 className="text-lg font-bold">Import Questions File</h2>
          
          <form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">Category</label>
                <select className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]">
                  <option>Select Category</option>
                  <option>General Knowledge</option>
                  <option>Science & Tech</option>
                  <option>Mathematics</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">Subject</label>
                <select className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]">
                  <option>Select Subject</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Indian History</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">Topic</label>
                <select className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]">
                  <option>Select Topic</option>
                  <option>Thermodynamics</option>
                  <option>Periodic Table</option>
                  <option>Mughal Empire</option>
                </select>
              </div>
            </div>

            <div 
              className={`border-2 border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center cursor-pointer transition-colors ${
                dragActive ? 'border-[#E94B4B] bg-[#E94B4B]/5' : 'border-gray-600 hover:border-gray-500'
              }`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-[#E94B4B] mb-3" />
              <p className="text-sm font-semibold">Drag & drop your CSV or Excel file here</p>
              <p className="text-xs text-gray-400 mt-1">or click to browse from files</p>
              <input type="file" className="hidden" id="file-upload" onChange={() => setUploadStatus('success')} />
              <label htmlFor="file-upload" className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-xs font-semibold cursor-pointer">
                Select File
              </label>
            </div>
          </form>

          {uploadStatus === 'success' && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Questions Imported Successfully</p>
                <p className="text-xs text-gray-400 mt-1">50 questions parsed, validated, and added to the Question Bank.</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#0f1117] text-white p-6 rounded-2xl border border-white/10 space-y-4">
          <h2 className="text-lg font-bold">CSV Guidelines</h2>
          <div className="space-y-3 text-xs text-gray-400">
            <p>1. Download the template file using the link below.</p>
            <p>2. Column headers must be exactly: <code className="text-[#E94B4B] font-mono font-semibold">question, option_a, option_b, option_c, option_d, correct_option, difficulty, explanation</code>.</p>
            <p>3. <code className="text-[#E94B4B] font-mono font-semibold">correct_option</code> must be one of: A, B, C, or D.</p>
            <p>4. <code className="text-[#E94B4B] font-mono font-semibold">difficulty</code> must be one of: Easy, Medium, or Hard.</p>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-600 hover:bg-gray-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer">
            <FileText size={14} /> Download CSV Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadQuestions;
