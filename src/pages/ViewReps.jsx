import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewReps() {
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

  const handleDownload = (courseCode) => {
    console.log(`Downloading course ${courseCode}`);
    // Example: navigate(`/course/${courseCode}/download`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">View Reports</h1> 

      <div className="mx-32 my-16">
        <h2 className="text-xl font-semibold mb-8">List of Courses for which you want to download the reports</h2>
        
        <div className="grid gap-32 md:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="font-medium text-gray-500">Course Code {course.code}</div>
                <h3 className="text-lg font-bold my-2">{course.name}</h3>
                <div className="text-sm text-gray-600">Semester: {course.semester}</div>
              </div>
              <div 
                className="flex flex-col items-end cursor-pointer"
                onClick={() => handleDownload(course.code)}
              >
                <div className="bg-lime-400 hover:bg-lime-600 text-white flex items-center justify-center rounded w-16 h-16 mb-1">
                  <span className="text-5xl">📥</span>
                </div>
                <span className="text-sm text-orange-400">Download</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};