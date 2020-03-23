import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SinglePost from './SinglePost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SinglePost />, div);
  ReactDOM.unmountComponentAtNode(div);
});