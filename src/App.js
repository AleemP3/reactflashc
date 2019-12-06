import React from 'react';
import './App.css';
import {Container, Header} from "semantic-ui-react"; 
import About from './components/About';
import Flashcards from "./Flashcards";
import Flashform from "./Flashform";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import { Route, Switch } from "react-router-dom";


const App = () => (
  <>
  <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/flashcards" component={Flashcards} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);
// class App extends React.Component {

//   state = {
//     flashCards: [
//       {id: 1, question: "What does importing react into your files do?", 
//         answer: "To allow JSX within our files",
//         },
//       {id: 2, question: "what is state?", 
//         answer: "a plain javascript object. In this case we have an array of objects.",
//         },
//       {id: 3, question: "what does every class in React require?", 
//         answer: "render() and return()",
//         }
//     ]
//   };

//   getId = () => {
//     return Math.floor((1 + Math.random()) * 10000);
//   };

//   addCards = (cardData) => {
//     let card = {id: this.getId(), question: cardData.question, answer: cardData.answer}
//     this.setState({ flashCards: [...this.state.flashCards, card] }); 
//   }

//   deleteCard = (id) => {
//     let cards = this.state.flashCards.filter(card => {
//       if (card.id !== id)
//       return card;
//     }); 
//     this.setState({ flashCards: [...cards]});
//   }

//   editCard = (newCard) => {
//     const setCards = this.state.flashCards.map( oldCard => {
//       if (oldCard.id === newCard.id)
//         return newCard;
//           return oldCard; 
//     });
    
    
//     this.setState({ flashCards: setCards, }); 
    
//   }

//   render() {
//   return (
//     <Container style={{paddingTop: "15px"}}>
//       <Header as="h1" style={{textAlign: "Center"}}>Flash Cards</Header>
//       <Flashform addCards={this.addCards}/>
//       <Flashcards cards={this.state.flashCards} 
//         deleteCard={this.deleteCard}
//         editCard={this.editCard} 
//       />
//     </Container>
//     );
//   };
// };

export default App;
