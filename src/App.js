import React, {Component} from 'react';

import Table from './Table/Table';
import './index.css';

class App extends Component {
  render() {

    const peopleArray = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
    ];

    return (
      <div className="App">
        <Table peopleListTable = {peopleArray}/>
      </div>
    )
  }
}

export default App;
