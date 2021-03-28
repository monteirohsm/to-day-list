import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TaskItem: React.FC = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
      <TaskContainer>
      <Checkbox
        checked={checked}
        onChange={handleChange}
      />
      
      <h2>Oi juliette</h2>
      </TaskContainer>
  );
};

export default TaskItem;

const TaskContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  box-sizing: border-box;

  height: 80px;
  width: 100%;
  padding: 0 25px;
  margin-bottom: 25px;  
  
  display: flex;
  flex-direction: row;
  align-items: center;
`;
