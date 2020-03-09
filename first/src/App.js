import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개', checked: true },
      { id: 2, text: '리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') { //눌러진 키가 enter면 handleCreate호출
      this.handleCreate();
    }
  }
  render() {
    const { input } = this.state;
    
    //this를 앞에 계속 붙여줘야하는 작업 생략 가능
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />  
      )}>
        <TodoItemList />
      </TodoListTemplate>
    );
  }
}

export default App;