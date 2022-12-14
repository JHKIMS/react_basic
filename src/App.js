import React, {useState} from "react";
import "./App.css";

export default function App(){
/*   state={
    todoData : [],
    value: ""
  } */
  const [todoData, setTodoData] = useState([]); // todoData는 변수이름 , setTodoData는 State를 정하는 함수
  const [value, setValue] = useState("");

  
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const bottomLine = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through":"none",
    };
  };
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      console.log(data);
      console.log(data.completed);
      return data;
    })
    setTodoData(newTodoData);
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // form안에 input을 전송할 때 페이지 리로드 되는 걸 막아준다.

    // 새로운 데이터 추가
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    // 원래 있던 목록에 새로운 데이터 추가
    // this.setState({todoData: [...todoData, newTodo], value: ""});
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
    
  }

  
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {todoData.map((data) => (
            <div style={bottomLine(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)} />
              {/* 할 일 목록 적는 곳 */}
                {data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
            </div>
          ))}

            {/* 입력칸 */}
            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
              <input type="text" name="value" style={{flex:'10', padding: '5px'}}
                placeholder="What I have Todo" 
                value={value}
                onChange={handleChange}
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
