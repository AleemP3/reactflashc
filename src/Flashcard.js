import React from "react";
import { Card, Button, Grid, Icon} from "semantic-ui-react";
import Flashform from "./Flashform";

class Flashcard extends React.Component {

  state = { showCard: {shown: false, editing: false} 
  };

  toggleAnswer = () => {
    this.setState({ shown: !this.state.shown }); 
 }

 toggleEdit = () => {
  this.setState({ editing: !this.state.editing });
 }

  render() {
    return (
  <Grid.Column>
    <Card>
      <Card.Content>
        {this.state.editing ? <Flashform question={this.props.question} 
          answer={this.props.answer} id={this.props.id} 
          editCard={this.props.editCard}
          /> 
        :
        <>
        <Card.Header>
          {this.props.question}
        </Card.Header>
        <hr />
        <br />
        <Button color="blue" onClick={() => this.toggleAnswer()}>
          <Icon name={this.state.shown ? "eye" : "eye slash" } />
        </Button>
        <br />
        <br />
        <Card.Header>
          { this.state.shown ? this.props.answer : null }
        </Card.Header>
        </>
        }
        <br />
        <Button color="red" onClick={() => this.props.deleteCard(this.props.id)}>Delete</Button>
        <Button color="green" onClick={this.toggleEdit}>Edit</Button>
      </Card.Content>
    </Card>
    <br />
  </Grid.Column>
    );
  };
};



export default Flashcard;