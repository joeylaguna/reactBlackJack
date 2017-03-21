import React, { Component } from 'react';
import './../css/Table.css';
import Card from './Card';

class Hand extends React.Component {
  constructor(props) {
  	super(props);
  }

  render(){
  	return(
  	  <div>
  	    <Card suite={this.props.suite} number={this.props.number}/>
  	  </div>
  	)
  }
}

export default Hand;
