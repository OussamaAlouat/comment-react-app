import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  const loop = [];
  const timeAt =() => `Today at ${faker.random.number(12)} :00`;
  for (let i = 0; i < 3; i++) {
    loop.push(<CommentDetail author={faker.name.firstName()} comment={faker.hacker.phrase()} timeAt={timeAt()} image={faker.image.avatar()}/>)
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
