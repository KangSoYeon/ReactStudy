# React Study

```
We built React to solve one problem: building large applications with data that changes over time.
```

웹에서 변화(Mutation)을 어떻게 할까
```
그냥 Mutation을 하지 말자. 그 대신에, 데이터가 바뀌면 그냥 뷰를 날려버리고 새로 만들자
```
--> virtual DOM을 사용해서 실제 브라우저 DOM에 새로운 걸 넣는 게 아니라 자바스크립트로 이뤄진 가상 DOM에 한번 렌더링 하고, 기존의 DOM과 비교를 한 다음에 정말 변화가 필요한 곳에만 업데이트
--> 데이터가 바뀌었을 때 더 이상 어떻게 업데이트 할 지를 고려하는 게 아니라, 그냥 일단 바뀐 데이터로 그려놓고 비교를 한 다음 바뀐 부분만 찾아서 바꿈

[참고링크] https://velopert.com/3626

### DOM이란

문서 객체 모델 (The Document Object Model) 은 HTML, XML 문서의 프로그래밍 interface이다.
HTML코드가 DOM은 아님. DevTools(브라우저에서 지원하는 개발자 툴)에서 보이는 코드가 DOM이다.

### JSX란?
* 꼭 닫혀야 하는 태그
* 감싸져 있는 엘리먼트 (두 개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야 한다.)
 --> fragment로 감싸면 됨
*  자바스크립트 사용시 바뀌는 값은 let, 바뀌지 않을 땐 const : 블록 단위
* if문 못쓰고 삼항연산자 혹은 AND연산자 사용해야함
* 주석은 {/*  */}


### props와 state
리액트 컴포넌트에서 다루는 두개의 데이터 : props, state
* props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값, 자식 컴포넌트는 받아온 props를 수정할수는 없음
* state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있음(동적인 데이터)


### React의 특별한점

#### 리액트에서는 배열의 push를 사용하면 안됨. --> concat을 사용하여 데이터 추가
```
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
```

#### 배열의 값을 직접 수정하면 절대 안됨!! 전개연산자를 이용하여 업데이트 해야함

```
nextTodos[index] = {
  ...selected, //선택한 객체의 정보를 불러오고
  checked: !selected.checked //checked 값만 다시 덮어쓴 것
};
```

* 각 todo의 요소에 대해 todo.id !== id 의 true, false를 반환
* filter로 true값이 반환 된 값만 배열로 다시 생성
* 화살표 함수와 filter
```
todos: todos.filter(todo => todo.id !== id) 
```
### 새로운 project 만드는법
```
npx create-react-app 프로젝트명
```


### 서버 시작하는 법
```
yarn start //cmd에서
npm run start //vscode 터미널에서
```

### build하는 법
```
yarn build
serve -s build
yarn global add serve
```

React는 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리.
"컴포넌트"라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 돕는다.

React Component의 하위 클래스

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

```
* ShoppingList는 React컴포넌트 클래스 또는 React 컴포넌트 타입.
* 개별 컴포넌트는 props라는 매개변수를 받아오고 render 함수를 통해 표시할 뷰 계층 구조를 반환
