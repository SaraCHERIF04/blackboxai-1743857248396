import { FaProjectDiagram, FaTasks, FaUsers, FaChartLine } from 'react-icons/fa';
import Card from '../components/Card';

export default function Dashboard() {
  const stats = [
    { title: 'Active Projects', value: 12, icon: <FaProjectDiagram size={24} />, color: 'bg-blue-100 text-blue-600' },
    { title: 'Pending Tasks', value: 8, icon: <FaTasks size={24} />, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Team Members', value: 5, icon: <FaUsers size={24} />, color: 'bg-green-100 text-green-600' },
    { title: 'Productivity', value: '87%', icon: <FaChartLine size={24} />, color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
          {/* Project list will be added here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Task Progress</h2>
          {/* Task progress chart will be added here */}
        </div>
      </div>
    </div>
  );
}