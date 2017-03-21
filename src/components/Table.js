import React, { Component } from 'react';
import Hand from './Hand';
import Score from './Score';
import './../css/Table.css';

class Table extends Component {
  constructor(){
  	super();
  	this.state = {
  	  deck: []
  	}
  	this.createDeck = this.createDeck.bind(this);
  }
  createDeck() {
  	let deck = [];
  	let suites = ['H', 'C', 'D', 'S'];
  	let numbers = [2,3,4,5,6,7,8,9, 10, 'K', 'Q', 'J', 'A'];
  	for(var i = 0; i < suites.length; i++) {
  	  for(var j = 0; j < numbers.length; j++) {
  	  	let card = {};
  	  	card['suite'] = suites[i];
  	  	card['number'] = numbers[j];
  	  	deck.push(card);
  	  }
  	}
  	this.setState({
  	  deck: deck
  	});
  }

  componentWillMount(){
    this.createDeck();
  }

  render() {
    return (
      <div>
        {this.state.deck.map((card, index) => <Hand suite={card['suite']} number={card['number']}/>)}
        <Score/>
      </div>
    );
  }
}

export default Table;
