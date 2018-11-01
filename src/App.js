import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  addNewUser = (UserInfo) => {
    this.setState(prevState => ({
      users: prevState.users.concat(UserInfo)
    }));
  }

  deleteUser = (UserInfo) => {
    let newArray = [...this.state.users];
    let index = newArray.indexOf(UserInfo);
    newArray.splice(index, 1);
    this.setState({
      users: newArray
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search onSubmit={this.addNewUser}/>
          <br />
          <Users users={this.state.users} onDelete={this.deleteUser}/>
        </div>
      </div>
    );
  }
}

export default App;
