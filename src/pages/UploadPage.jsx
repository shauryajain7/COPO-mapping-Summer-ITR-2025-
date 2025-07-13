import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MarkTypeDropdown from '../components/MarkTypeDropdown';
import InputFileUpload from '../components/InputFileUpload';
import UploadResultTable from '../components/upload-result-table'; 

export default function UploadPage() {
  const location = useLocation();
  const { code, name, semester } = location.state || {};

  const markTypes = [
    "Quiz 1 marks",
    "Quiz 2 marks",
    "Quiz 3 marks",
    "Quiz 4 marks",
    "Mid term marks",
    "Final exam marks",
    "Lab marks"
  ];

  const [selectedMarkType, setSelectedMarkType] = useState('');

  const handleChange = (event) => {
    setSelectedMarkType(event.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-black mb-3">Upload Results</h1>

      <div className="mb-4">
        <p className="text-lg font-semibold">Course Name : {name}</p>
        <p className="text-lg font-semibold">Semester : {semester}</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <MarkTypeDropdown
          value={selectedMarkType}
          onChange={handleChange}
          options={markTypes}
        />
        <InputFileUpload />
      </div>

      <UploadResultTable markTypes={markTypes} /> {}

      <button className="bg-rose-300 hover:bg-rose-400 text-white px-4 py-2 rounded mt-6">
        Generate Reports
      </button>
    </div>
  );
}
