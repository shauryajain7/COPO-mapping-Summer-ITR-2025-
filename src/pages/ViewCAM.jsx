import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewCAM() {
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
  const mockMatrixData = [
    ['CO1', 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 0, 1, 2, 0, 0,1],
    ['CO2', 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 1, 1, 0, 0,2],
    ['CO3', 2, 2, 1, 1, 0, 0, 1, 1, 2, 1, 0, 0, 1, 1, 0,1],
    ['CO4', 1, 0, 2, 2, 1, 0, 1, 0, 2, 1, 0, 0, 0, 1, 0,0],
    ['CO5', 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 2, 1, 0, 0,1],
    ['CO6', 2, 0, 1, 1, 0, 0, 1, 2, 1, 0, 1, 0, 0, 1, 0,3]
  ];
  const coDescriptions = [
    "Understand fundamentals of deep learning",
    "Apply CNNs in image classification tasks",
    "Build and train RNN-based models",
    "Evaluate performance of neural networks",
    "Explore advanced topics like GANs",
    "Deploy deep learning models in production"
  ];

  const courseDetails = {
    courseName: course.name,
    courseCode: course.code,
    semester: course.semester,
    programme: 'B.Tech',  // or fetch from backend
    year: '2025–26'       // or calculate dynamically
  };

  navigate('/Copomap', {
    state: {
      matrixData: mockMatrixData,
      coDescriptions,
      courseDetails
    }
  });
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">View Course Articulation Matrix</h1> 

      <div className="mx-32 my-16">
        <h2 className="text-xl font-semibold mb-12">List of Courses which you are teaching</h2>
        
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
                  className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};