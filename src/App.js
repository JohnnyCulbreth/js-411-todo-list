import React, { Component } from 'react';
import './App.css';
import './components/ToDoCard';
import ToDoCard from './components/ToDoCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true,
      inputValue: '',
      listOfTodos: [],
    };
  }

  handleClick = () => {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
    });
    this.setState({ inputValue: '' });
  };

  deleteTodo = (index) => {
    this.state.listOfTodos.splice(index, 1);
    this.setState({ listOfTodos: [...this.state.listOfTodos] });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='./todo.png' className='App-logo' alt='logo' />
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type='submit'>Submit Here</button>
          </form>
          <ol>
            {this.state.listOfTodos.map((todo, index) => {
              return (
                <ToDoCard
                  key={index}
                  index={index}
                  title={todo}
                  clickToRemove={this.deleteTodo}
                />
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
