import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';

class Search extends Component {
  state = {
    userName: '',
    error: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({userName: '', error: ''});
      })
      .catch(err => {
        this.setState({error: err});
      });
  }

  render(){
    const { error } = this.state;
    return (
      <Form inline ref={form => this.formEl = form} onSubmit = {this.handleSubmit}>
        <FormGroup controlId="formInlineEmail">
          <FormControl type="text" placeholder="Enter username" value={this.state.userName}
            onChange={event => this.setState({userName: event.target.value})} required/>
        </FormGroup>{' '}
        <Button type="submit">Add</Button>
        { error && (<p style={{color: 'red'}}> User Not Found!</p>)}
      </Form>
    )
  }
}

export default Search;