import { FaBell, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-800">Project Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <FaBell size={20} />
        </button>
        <div className="flex items-center space-x-2">
          <FaUserCircle size={24} className="text-gray-500" />
          <span className="text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}