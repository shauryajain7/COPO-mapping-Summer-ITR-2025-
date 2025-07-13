import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Drawer({ isOpen }) {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 flex flex-col h-full`}>
      <div className="p-4 flex items-center justify-center">
        <Logo />
        {isOpen && <span className="ml-2 text-xl font-bold">COPO</span>}
      </div>
      <nav className="flex-1">
        <ul>
          <li className="hover:bg-gray-700">
            <Link to="/" className="flex items-center p-4 w-full">
              <span>🏠</span>
              {isOpen && <span className="ml-2">Home</span>}
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link to="/ViewCAM" className="flex items-center p-4 w-full">
              <span>📚</span>
              {isOpen && <span className="ml-2">View Course Articulation Matrix</span>}
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link to="/UpRes" className="flex items-center p-4 w-full">
              <span>📤</span>
              {isOpen && <span className="ml-2">Upload Results</span>}
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link to="/ViewReps" className="flex items-center p-4 w-full">
              <span>🔍</span>
              {isOpen && <span className="ml-2">View Reports</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}