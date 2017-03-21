import React, { Component } from 'react';
import './../css/Table.css';

class Score extends React.Component {
  constructor(props) {
  	super(props);
  }
  render(){
  	return(
  	  <div>
  	    <button onClick={this.props.createDeck}>Deal</button>
        <button onClick={this.props.hitDeck}>Hit</button>
  	  </div>
  	)
  }
}

export default Score;
