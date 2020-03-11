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
      input: e.target.value //input의 다음 바뀔 값
    });
  }

  //react에서는 배열에 push 사용하면 안됨.
  //-> 배열에 값이 추가되긴 하지만 가르키고 있는 배열이 똑같아서 비교를 할 수 없음
  //concat은 새로운 배열을 만들어서 괜찮음.
  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({ //concat을 사용하여 배열에 추가
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') { //눌러진 키가 enter면 handleCreate호출
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //선택한 객체

    const nextTodos = [...todos]; //배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    //배열의 값을 직접 수정하면 절대 안됨!! 전개연산자를 이용하여 업데이트 해야함
    nextTodos[index] = {
      ...selected, //선택한 객체의 정보를 불러오고
      checked: !selected.checked //checked 값만 다시 덮어쓴 것
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      //파라미터로 받아온 id를 가지고 있지 않은 배열로 새로 생성한 것
      //각 todo의 요소에 대해 todo.id !== id 의 true, false를 반환
      //filter로 true값이 반환 된 값만 배열로 다시 생성
      todos: todos.filter(todo => todo.id !== id) 
    });
  }

  render() {
    const { input, todos } = this.state;
    
    //this를 앞에 계속 붙여줘야하는 작업 생략 가능
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle
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
        <TodoItemList todos={todos} onToggle = {handleToggle}/>
      </TodoListTemplate>
    );
  }
}

export default App;