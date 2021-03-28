import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

function AddButton() {
  return (
    <Container>
      <AddContainer aria-label='add'>
        <AddIcon />
      </AddContainer>
      </Container>
  );
}

export default AddButton;

const AddContainer = styled(Fab)`
    background-color: black !important;

    svg {
      color: white;
    }

    position: absolute !important;
    bottom: 30px !important;
    right: 30px !important;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 600px;
  height: 0;
  bottom: 0;
`;
