import React from "react";
import { Card, Button, Grid, Icon} from "semantic-ui-react";


// const Flashcard = (props) => (
//   <Grid.Column>
//     <Card>
//       <Card.Content>
//         <Card.Header>
//           {props.question}
//         </Card.Header>
//         <hr />
//         <br />
//         <Button color="blue" onClick={() => props.toggleAnswer()}>
//           <Icon name="eye" />
//         </Button>
//         <br />
//         <br />
//         <Card.Header>
//           {console.log(props.show)} 
//           { props.show === false ? props.answer : null }
//         </Card.Header>
//         <br />
//         <Button color="red" onClick={() => props.deleteCard(props.id)}>Delete</Button>
//       </Card.Content>
//     </Card>
//     <br />
//   </Grid.Column>
// );

class Flashcard extends React.Component {

  state = { showCard: {shown: false}

  };

  toggleAnswer = () => {
    this.setState({ shown: !this.state.shown }); 
 }

  render() {
    return (
  <Grid.Column>
    <Card>
      <Card.Content>
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
        <br />
        <Button color="red" onClick={() => this.props.deleteCard(this.props.id)}>Delete</Button>
      </Card.Content>
    </Card>
    <br />
  </Grid.Column>
    );
  };
};



export default Flashcard;