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

  handleChange = (e) =>{
    this.setState({ value: e.target.value })
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
    this.setState({todoData: [...this.state.todoData, newTodo]});
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
  ],
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
            <div style={this.bottomLine()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
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
