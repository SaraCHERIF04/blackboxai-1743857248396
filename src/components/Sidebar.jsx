import { FaHome, FaTasks, FaUsers, FaProjectDiagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-600 text-white p-4">
      <nav className="mt-8">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}`
              }
            >
              <FaHome className="mr-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/tasks" 
              className={({isActive}) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}`
              }
            >
              <FaTasks className="mr-3" />
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({isActive}) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}`
              }
            >
              <FaProjectDiagram className="mr-3" />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/users" 
              className={({isActive}) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}`
              }
            >
              <FaUsers className="mr-3" />
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}