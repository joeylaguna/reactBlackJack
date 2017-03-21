import React, { Component } from 'react';
import './../css/Table.css';

class Card extends React.Component {
  constructor(props) {
  	super(props);
  }
  render(){
  	return(
  	  <div className='card'>
  	    <h1>{this.props.suite}</h1>
        <h3>{this.props.number}</h3>
  	  </div>
  	)
  }
}

export default Card;
