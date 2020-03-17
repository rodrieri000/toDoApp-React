import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    };
  }

  toggle = () => {
    this.setState({
      isClicked: !this.state.isClicked})
  }

  inputUpdate = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      todos : [...this.state.todos, this.state.text],
      text: ''
    })
  }

  // deleteTodo = (event) => {
  //   event.preventDefault()
  //   this.setState({this.state.todos.filter(todos => todos !== todos)    
  //   });
  // }

  render() {
    return (
      <div className="App">   
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />      
          <form onSubmit={this.formSubmit}>
            <input value={this.state.text} onChange={this.inputUpdate}/>
            <button onClick={this.state.todos}>Submit</button>
            <FirstComponent todos={this.state.todos}/>
          </form>
        </header>        
      </div>
    );
  }
}

export default App;
