import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Home from './views/routes/home';
import Design from './views/routes/design';
import Dev from './views/routes/dev';

import Menu from './views/components/menu/menu';

const AppContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


const App = () => {
  return (
    <BrowserRouter> 
      <AppContainerDiv>
      <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppContainerDiv>
    </BrowserRouter>
  );
};

export default App;
