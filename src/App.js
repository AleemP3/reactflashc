import React from 'react';
import './App.css';
import {Container, Header} from "semantic-ui-react"; 
import Flashcards from "./Flashcards";
import Flashform from "./Flashform";

class App extends React.Component {

  state = {
    flashCards: [
      {id: 1, question: "What does importing react into your files do?", 
        answer: "To allow JSX within our files",
        },
      {id: 2, question: "what is state?", 
        answer: "a plain javascript object. In this case we have an array of objects.",
        },
      {id: 3, question: "what does every class in React require?", 
        answer: "render() and return()",
        }
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCards = (cardData) => {
    let card = {id: this.getId(), question: cardData.question, answer: cardData.answer}
    this.setState({ flashCards: [...this.state.flashCards, card] }); 
  }

  deleteCard = (id) => {
    let cards = this.state.flashCards.filter(card => {
      if (card.id !== id)
      return card;
    }); 
    this.setState({ flashCards: [...cards]});
  }


  render() {
  return (
    <Container style={{paddingTop: "15px"}}>
      <Header as="h1" style={{textAlign: "Center"}}>Flash Cards</Header>
      <Flashform addCards={this.addCards}/>
      <Flashcards cards={this.state.flashCards} 
        deleteCard={this.deleteCard}
        toggleAnswer={this.toggleAnswer}
        change={this.change} 
      />
    </Container>
    );
  };
};

export default App;
