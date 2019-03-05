import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './styles.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        name: 'teste',
        avatar: 'https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754',
        time: 'há 3 min',
        body:
          'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.',
      },
      {
        id: 1,
        name: 'teste 2 ',
        avatar: 'https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754',
        time: 'há 666 min',
        body:
          'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
