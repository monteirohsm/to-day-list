import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddButton from './components/AddButton';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <Header />
      <TaskList />
      <AddButton />
    </div>
  );
}

export default App;
