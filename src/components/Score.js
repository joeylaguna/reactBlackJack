import React, { Component } from 'react';
import './../css/Table.css';

class Score extends React.Component {
  constructor(props) {
  	super(props);
  }
  render(){
    let winner;
    if(this.props.winner === 'Dealer') {
      winner = 'Dealer Wins!'
    } else if (this.props.winner === 'Player') {
      winner = 'Player wins!'
    } else if(this.props.winner === 'Draw') {
      winner = 'Draw!'
    }
  	return(
  	  <div>
  	    <button onClick={this.props.createDeck}>Deal</button>
        <h1>{winner}</h1>
        {this.props.deck.length ? <button onClick={this.props.hitDeck}>Hit</button> : ''}
        {this.props.deck.length ? <button onClick={this.props.stand}>Stand</button> : ''}
  	  </div>
  	)
  }
}

export default Score;
