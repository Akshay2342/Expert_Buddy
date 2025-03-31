import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
  return (
    <div className='p-4 border rounded shadow-sm bg-white'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default TaskCard;
