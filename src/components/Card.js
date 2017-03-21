import React, { Component } from 'react';
import './../css/Table.css';

class Card extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      suite: this.props.suite,
      number: this.props.number
    }
  }

  render(){
    let cardStyle;
    this.state.suite === 'D' || this.state.suite === 'H' ? cardStyle = 'card redCard' : cardStyle = 'card blackCard';
  	return(
  	  <div className={cardStyle}>
  	    <h1>{this.props.number}</h1>
        <h3>{this.props.suite}</h3>
  	  </div>
  	)
  }
}

export default Card;
