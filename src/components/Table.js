import React, { Component } from 'react';
import Hand from './Hand';
import Score from './Score';
import './../css/Table.css';

class Table extends Component {
  constructor(){
  	super();
  	this.state = {
  	  deck: [],
  	  dealerHand: [],
  	  playerHand: []
  	}
  	this.createDeck = this.createDeck.bind(this);
  	this.shuffleDeck = this.shuffleDeck.bind(this);
  	this.dealCards = this.dealCards.bind(this);
  	this.hitDeck = this.hitDeck.bind(this);
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
  	this.shuffleDeck(deck);
  }

  shuffleDeck(deck) {
  	let shuffled = [];
  	let length = deck.length;
  	while(length !== 0) {
  	  let randomIndex = Math.floor(Math.random()*length);
  	  shuffled.push(deck[randomIndex]);
  	  deck.splice(randomIndex, 1);
  	  length--;
  	}
  	this.setState({deck: shuffled}, () => {
  	  this.dealCards(shuffled)
  	});
  }

  dealCards(shuffled) {
  	let dealerHand = [];
  	dealerHand.push(this.state.deck.shift());
  	dealerHand.push(this.state.deck.shift());

  	let playerHand = [];
	playerHand.push(this.state.deck.shift());
  	playerHand.push(this.state.deck.shift());

  	this.setState({
  	  deck: shuffled,
  	  dealerHand: dealerHand,
  	  playerHand: playerHand
  	});

  }
  hitDeck() {
    let card = this.state.deck.shift();
	let playerHand = this.state.playerHand;
	playerHand.push(card);
	this.setState({playerHand: playerHand});
  }

  render() {
    return (
      <div>
        {this.state.dealerHand ? <Hand cards={this.state.dealerHand}/> : []}
        <Score deck={this.state.deck} createDeck={this.createDeck} hitDeck={this.hitDeck}/>
        {this.state.playerHand ? <Hand cards={this.state.playerHand} /> : []}
      </div>
    );
  }
}

export default Table;
