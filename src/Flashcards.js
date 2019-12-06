import React from "react";
import {Grid, Header  } from "semantic-ui-react";
import Flashcard from "./Flashcard";
import Flashform from "./Flashform";

class Flashcards extends React.Component {

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

  createCards = () => {
    return this.state.flashCards.map(card => (
      <Flashcard key={card.id} {...card} deleteCard={this.deleteCard}
        toggleAnswer={this.toggleAnswer}
        editCard={this.editCard}
      />
    ))
  }

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

  editCard = (newCard) => {
    const setCards = this.state.flashCards.map( oldCard => {
      if (oldCard.id === newCard.id)
        return newCard;
          return oldCard; 
    });
        this.setState({ flashCards: setCards, }); 
  }

  render() {
    return (
      <>  
      <Header as="h1" style={{textAlign: "Center"}}>Welcome to Flash Cards</Header>
      <hr />
        <Flashform />
          <Grid>
            <Grid.Row columns={3}>
              {this.createCards()}
            </Grid.Row>
          </Grid>
        </>
      );
    };
  };


export default Flashcards;