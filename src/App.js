import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import { AppStyled, HeaderStyled, ContainerStyled } from './AppStyled';
import ContinentSelectContainer from './components/ContinentSelect/ContinentSelectContainer';
import CountryAutosuggestContainer from './components/CountryAutosuggest/CountryAutosuggestContainer';
import CountryCardContainer from './components/CountryCard/CountryCardContainer';

function App() {
  return (
    <Provider store={store}>
      <AppStyled>
        <HeaderStyled>
          <h1>World travelers guide</h1>
        </HeaderStyled>
        <ContainerStyled>
          <ContinentSelectContainer />
          <CountryAutosuggestContainer />
          <CountryCardContainer />
        </ContainerStyled>
      </AppStyled>
    </Provider>
  );
}

export default App;
