import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import Home from './views/routes/home';
import Design from './views/routes/design';
import Dev from './views/routes/dev';


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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>
      </AppContainerDiv>
    </BrowserRouter>
  );
};

export default App;
