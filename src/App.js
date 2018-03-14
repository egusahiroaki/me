import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import CardList from './components/CardList/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/createPalette';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import createTypography from 'material-ui/styles/createTypography';


const font = '\'Comfortaa\', sans-serif'; 

const theme = (() => {
  const palette = createPalette({
    // type: 'dark',
  });

  const typography = createTypography(palette, {
    fontFamily: font,
  });

  return createMuiTheme({
    palette: palette,
    typography: typography,
  });
})();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <CardList />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
