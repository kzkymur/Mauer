import React from 'react';
import { render } from 'react-dom';
import Title from './Title';
import Statement from './Statement';
import Background from './Background';
import './index.css';

class App extends React.Component {
  render () {
    return (
      <>
        <Title/>
        <Statement/>
        <Background/>
      </>
    );
  }
}

render(<App/>, document.getElementById('app'));
