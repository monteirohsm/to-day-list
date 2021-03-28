import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';

const Header: React.FC = () => {
  return (
    <HeaderContainer> 
      <Typography variant='h2' component='h2'>
        TO-DAY List
      </Typography>
      <Typography variant='h5' gutterBottom>
        Organize sua Vida
      </Typography>
      <Divider style={{marginBottom: '23px', marginTop: '23px',  height: '2px'}}/>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
margin-top: 60px;
text-align: center;
width: 100%;
max-width: 600px;
`;