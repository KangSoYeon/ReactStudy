import React, { Component } from 'react';
import TOC from "./components/Toc";
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <Subject title="React" sub="F"></Subject>
      <TOC></TOC>
    </div>
  );
}

export default App;
