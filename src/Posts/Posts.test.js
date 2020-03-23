import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Posts from './Posts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Posts />, div);
  ReactDOM.unmountComponentAtNode(div);
});