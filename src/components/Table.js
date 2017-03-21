import React, { Component } from 'react';
import Hand from './Hand';
import Score from './Score';
import './../css/Table.css';

class Table extends Component {
  render() {
    return (
      <div>
        <Hand/>
        <Score/>
        <Hand/>
      </div>
    );
  }
}

export default Table;
