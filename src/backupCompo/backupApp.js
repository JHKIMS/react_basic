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

  bottomLine = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through":"none",
    };
  };
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    this.setState({todoData: newTodoData});
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      console.log(data);
      console.log(data.completed);
      return data;
    })
    this.setState({ todoData : newTodoData});
  }

  

  handleSubmit = (e) => {
    e.preventDefault();
    // form안에 input을 전송할 때 페이지 리로드 되는 걸 막아준다.

    // 새로운 데이터 추가
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    // 원래 있던 목록에 새로운 데이터 추가
    this.setState({todoData: [...this.state.todoData, newTodo], value: ""});
  }
state={
  todoData : [],
  value: ""
}
  
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.bottomLine(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => this.handleCompleteChange(data.id)} />
              {/* 할 일 목록 적는 곳 */}
                {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
            </div>
          ))}

            {/* 입력칸 */}
            <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
              <input type="text" name="value" style={{flex:'10', padding: '5px'}}
                placeholder="What I have Todo" 
                value={this.state.value}
                onChange={this.handleChange}
              />

              {/* 버튼 */}
              <input type = "submit"
                value="입력"
                className="btn"
                style={{flex:'1'}}
              />

            </form>

        </div>
      </div>
    );
  }
}
