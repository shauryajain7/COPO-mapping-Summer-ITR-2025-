import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpRes() {
  const navigate = useNavigate();
  
  // Sample course data
  const courses = [
    {
      code: '#123',
      name: 'Deep Learning',
      semester: '5'
    },
    {
      code: '#345',
      name: 'OOP',
      semester: '3'
    }
  ];

  const handleViewClick = (course) => {
  navigate('/UploadPage', { state: course });
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Upload Results</h1> 

      <div className="mx-32 my-16">
        <h2 className="text-xl font-semibold mb-12">List of Courses which you are coordinating</h2>
        
        <div className="grid gap-32 md:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex-grow">
                <div className="font-medium text-gray-500">Course Code {course.code}</div>
                <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                <div className="text-sm text-gray-600">Semester: {course.semester}</div>
              </div>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => handleViewClick(course)}
                  className="bg-rose-400 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm"
                >
                  Upload
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};