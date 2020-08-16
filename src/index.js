import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  const loop = [];
  for (let i = 0; i < 3; i++) {
    loop.push(<CommentDetail/>)
  }


  return (
    <div className="ui container comments">
      {loop}
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
