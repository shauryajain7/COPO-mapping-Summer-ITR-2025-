export default function AppBar({ onMenuClick }) {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center">
      <button onClick={onMenuClick} className="mr-4 text-gray-600">
        ☰
      </button>
      <img 
        src="https://lighthouse.manipal.edu/d2l/lp/navbars/6606/theme/viewimage/13810/view?v=20.25.6.21714" 
        alt="University Logo"
        className="h-10 w-auto" // Adjust height as needed
      />
    </header>
  );
}
