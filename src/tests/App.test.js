import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from "../components/header/header.component";
import {BrowserRouter} from "react-router-dom";

describe('MainApp', () => {

  it('renders main app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has a header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      );
    const linkElement = screen.getByText(/awesome smartphones/i);
    expect(linkElement).toBeInTheDocument();
  });

})