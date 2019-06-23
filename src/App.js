import React from 'react';
import { AppStyled, HeaderStyled } from './AppStyled';
import CountriesGuide from './components/CountriesGuide';

function App() {
  return (
    <AppStyled>
      <HeaderStyled>
        <h1>World travelers guide</h1>
      </HeaderStyled>
      <CountriesGuide />
    </AppStyled>
  );
}

export default App;
