import React from 'react';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '0 15px',
      maxWidth: 600,
      boxSizing: 'border-box',
      overflowY: 'auto',
    }}>
      <TaskItem />
      < TaskItem />
      < TaskItem />
      < TaskItem />
    </div>

  );
};

export default TaskList;
