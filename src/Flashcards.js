import React from "react";
import {Grid,  } from "semantic-ui-react";
import Flashcard from "./Flashcard";


const Flashcards = (props) => (

  <Grid>
    <Grid.Row columns={3}>
        {props.cards.map(card => (
            <Flashcard key={card.id} {...card} deleteCard={props.deleteCard}
              toggleAnswer={props.toggleAnswer}
              editCard={props.editCard}
            />
          ))
        }
    </Grid.Row>
  </Grid>

);


export default Flashcards;