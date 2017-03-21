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
        {this.props.cards.map((card, index) => <Card suite={card['suite']} number={card['number']} key={index}/>)}
  	  </div>
  	)
  }
}

export default Hand;
