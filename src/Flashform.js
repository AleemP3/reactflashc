import React from "react";
import { Form, }  from "semantic-ui-react"


class Flashform extends React.Component {
  state = {question: "", answer: ""}

  componentDidMount() {
    if (this.props.id)
      this.setState({question: this.props.question, answer: this.props.answer});
  }

  submit = (e) => {
    e.preventDefault();
      if (this.props.id)
        this.props.editCard({ id: this.props.id, question: this.state.question, answer: this.state.answer });
      else 
        this.props.addCards(this.state); 
        
    this.setState({question: "", answer: ""});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {question, answer} = this.state; 
    return(
      <Form onSubmit={this.submit}>
        <Form.Input           
          fluid
          label="question"
          placeholder="question"
          name="question"
          value={question}
          onChange={this.handleChange}
        />
        <Form.Input 
          fluid
          label="answer"
          placeholder="answer"
          name="answer"
          value={answer}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>
        <br />
      </Form>
    );
  };
};

export default Flashform; 