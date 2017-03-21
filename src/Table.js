import React, { Component } from 'react';
import logo from './logo.svg';
import Hand from './Hand';
import Score from './Score';
import './Table.css';

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
