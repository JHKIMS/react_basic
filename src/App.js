import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  bottomLine = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    this.setState({todoData: newTodoData});
  }
state={
  todoData : [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ]
}
  
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => (
            <div style={this.bottomLine()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {/* 할 일 목록 적는 곳 */}
                {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
