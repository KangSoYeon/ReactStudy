import React, { Component } from 'react';
import TOC from "./components/Toc";
import Subject from "./components/Subject"
import './App.css';

//부모인 App의 입장에서는 state라는 내부정보 사용
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", sub: "World Wide Web"},
      contents:[
        {id:1, title:'HTML', desc: 'Html is for information'},
        {id:2, title:'css', desc: 'CSS is for design'},
        {id:3, title:'JavaScript', desc: 'Javascript is for interactive'},
      ]
    }
  }

  //그것을 자식 입장에서는 props의 역할로 전달
  //app의 입장에서는 토픽이 내부적으로 어떻게 돌아가는지 알 필요 없음
  //데이터라고 하는 props로는 어떤 형태의 정보를 전달하면 되는 가 
  //--> 사용자의 입장에서 알아야 할것만 알면 됨
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
      </div>
    );
  }
}

export default App;
