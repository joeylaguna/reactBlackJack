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
  	  playerHand: [],
  	  winner: ''
  	}
  	this.createDeck = this.createDeck.bind(this);
  	this.shuffleDeck = this.shuffleDeck.bind(this);
  	this.dealCards = this.dealCards.bind(this);
  	this.hitDeck = this.hitDeck.bind(this);
  	this.checkForWinner = this.checkForWinner.bind(this);
  	this.calculateDealerScore = this.calculateDealerScore.bind(this);
  	this.calulatePlayerScore = this.calulatePlayerScore.bind(this);
  	this.stand = this.stand.bind(this);
  	this.checkIfDealerHits = this.checkIfDealerHits.bind(this);
  	this.dealerHitDeck = this.dealerHitDeck.bind(this);
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
  	  playerHand: playerHand,
  	  winner: ''
  	});
  }

  hitDeck() {
    let card = this.state.deck.shift();
  	let playerHand = this.state.playerHand;
  	playerHand.push(card);
  	this.setState({
      playerHand: playerHand
    });
  };

  dealerHitDeck() {
  	let card = this.state.deck.shift();
  	let dealerHand = this.state.dealerHand;
  	dealerHand.push(card);
  	this.setState({
  	  dealerHand: dealerHand
  	});
  }

  calculateDealerScore() {
  	let dealerScore = 0;
  	let dealerHand = this.state.dealerHand;
  	for (var i = 0; i < dealerHand.length; i++) {
  	  if (dealerHand[i].number === 'K' || dealerHand[i].number === 'Q' || dealerHand[i].number === 'J') {
  	  	dealerScore+=10
  	  } else if (dealerHand[i].number === 'A') {
  	  	if(dealerScore + 11 > 21) {
  	  	  dealerScore+=11;
  	  	} else {
  	  	  dealerScore+=1;
  	  	}
  	  } else {
  	  	dealerScore+=dealerHand[i].number;
  	  } 
  	}
  	return dealerScore;
  }

  calulatePlayerScore() {
    let playerScore = 0;
    let playerHand = this.state.playerHand;
  	for (var i = 0; i < playerHand.length; i++) {
  	  if (playerHand[i].number === 'K' || playerHand[i].number === 'Q' || playerHand[i].number === 'J') {
  	  	playerScore+=10
  	  } else if (playerHand[i].number === 'A') {
  	  	if(playerScore + 11 > 21) {
  	  	  playerScore+=11;
  	  	} else {
  	  	  playerScore+=1;
  	  	}
  	  } else {
  	  	playerScore+=playerHand[i].number;
  	  } 
  	}
  	return playerScore;
  }

  checkIfDealerHits() {
  	let dealerScore = this.calculateDealerScore();
  	while(dealerScore < 17) {
  	  this.dealerHitDeck();
  	  dealerScore = this.calculateDealerScore();
  	}
  }

  stand(){
  	this.checkIfDealerHits();
  	this.checkForWinner();
  }

  checkForWinner() {
  	let playerScore = this.calulatePlayerScore();
  	let dealerScore = this.calculateDealerScore();
  	if(playerScore === dealerScore) {
  	  this.setState({
  	  	winner: 'Draw'
  	  });
  	} else if (playerScore > 21) {
  	  this.setState({
  	  	winner: 'Dealer'
  	  });
  	} else if (playerScore <= 21 && playerScore > dealerScore) {
  	  this.setState({
  	  	winner: 'Player'
  	  });
  	} else if (dealerScore <= 21 && dealerScore > playerScore){
  	  this.setState({
  	  	winner: 'Dealer'
  	  });
  	}
  }

  render() {
    return (
      <div>
        {this.state.dealerHand ? <Hand cards={this.state.dealerHand}/> : []}
        <Score deck={this.state.deck} createDeck={this.createDeck} hitDeck={this.hitDeck} stand={this.stand} winner={this.state.winner}/>
        {this.state.playerHand ? <Hand cards={this.state.playerHand} /> : []}
      </div>
    );
  }
}

export default Table;
