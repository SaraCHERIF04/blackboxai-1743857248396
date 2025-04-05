import { useState } from 'react';
import { FaPlus, FaSearch, FaEdit, FaTrash, FaChartPie } from 'react-icons/fa';
import Modal from '../components/Modal';
import ProjectForm from '../components/ProjectForm';
import Card from '../components/Card';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: 'Website Redesign', 
      description: 'Complete redesign of company website', 
      progress: 75,
      startDate: '2023-10-01',
      endDate: '2023-12-15',
      status: 'In Progress'
    },
    { 
      id: 2, 
      name: 'Mobile App Development', 
      description: 'New cross-platform mobile application', 
      progress: 30,
      startDate: '2023-11-01',
      endDate: '2024-02-28',
      status: 'In Progress'
    },
    { 
      id: 3, 
      name: 'Marketing Campaign', 
      description: 'Q1 marketing campaign preparation', 
      progress: 100,
      startDate: '2023-09-01',
      endDate: '2023-09-30',
      status: 'Completed'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Project Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <FaPlus className="mr-2" /> Add Project
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div 
                    className={`h-2.5 rounded-full ${
                      project.progress < 30 ? 'bg-red-500' :
                      project.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
                    }`} 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Start Date</p>
                  <p className="text-gray-800">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="text-gray-800">{project.endDate}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Status</p>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}