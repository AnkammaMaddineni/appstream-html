import React from 'react';
import Car from './Car'
import Employee from './Employee'
import Nasa from './Nasa'

class App extends React.Component {
  render() {
    return (
      <div>
        <Car/>
        <Employee/>
        <Nasa/>
      </div>
    )
  }
} 

export default App;