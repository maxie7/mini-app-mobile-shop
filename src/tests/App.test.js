import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from "../components/header.component";

describe('MainApp', () => {

  it('renders main app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has a header component', () => {
    render(<Header />);
    const linkElement = screen.getByText(/awesome smartphones/i);
    expect(linkElement).toBeInTheDocument();
  });

})