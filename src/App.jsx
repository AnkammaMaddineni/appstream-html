import React from 'react';
import Car from './Car'
import Employee from './Employee'
import Nasa from './Nasa'
import Item from './Item'
import Registration from './Registration';
import State from './State';

class App extends React.Component {
  render() {
    return (
      <>
      <form align="center">
      <h1>Class Components</h1>
      <State/>
      </form>
      </>
    )
  }
} 

export default App;
