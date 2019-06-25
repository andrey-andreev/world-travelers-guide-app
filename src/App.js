import React from 'react';
import { Provider } from 'react-redux';
import { AppStyled, HeaderStyled } from './AppStyled';
import CountriesGuide from './components/CountriesGuide';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      <AppStyled>
        <HeaderStyled>
          <h1>World travelers guide</h1>
        </HeaderStyled>
        <CountriesGuide />
      </AppStyled>
    </Provider>
  );
}

export default App;
