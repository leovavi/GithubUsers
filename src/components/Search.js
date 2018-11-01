import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';

class Search extends Component {
  state = {
    userName: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
      })
      .catch(err => {console.log(err.message)});
  }

  render(){
    return (
      <Form inline onSubmit = {this.handleSubmit}>
        <FormGroup controlId="formInlineEmail">
          <FormControl type="text" placeholder="Enter username" value={this.state.userName}
            onChange={event => this.setState({userName: event.target.value})} required/>
        </FormGroup>{' '}
        <Button type="submit">Add</Button>
      </Form>
    )
  }
}

export default Search;