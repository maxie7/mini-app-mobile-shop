import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from "../components/Header/Header.component";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "arwes";
import { customTheme } from "../assets/styles/customThemeArwes";

describe('MainApp', () => {

  it('renders main app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has a Header component', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={createTheme(customTheme)}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>
      );
    const linkElement = screen.getByText(/awesome smartphones/i);
    expect(linkElement).toBeInTheDocument();
  });

})