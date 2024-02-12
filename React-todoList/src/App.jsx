import { useState } from "react";
import "./App.css";
import TodoHeader from "./Components/TodoHeader";
import LayoutComponent from "./Components/LayoutComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import InputTodoList from "./Components/InputTodoList";
import TodoList from "./Components/TodoLists";
import ErrorMessage from "./Components/ErrorMessage";

function App() {

  const [todo,setTodo] = useState([]);

  const inputTodo = (title,timing) =>{
    if(title!=="" && timing!==""){
    const newTodo = [...todo,{id: todo.length+1 ,title: title,timing: timing}]
    setTodo(newTodo);
    }
  }

  const deleteList = (key) => {
    const newList = todo.filter((item)=>item.id!=key)
    setTodo(newList);
  }

  return (
    <>
      <center>
        <LayoutComponent>
          <TodoHeader />
          <InputTodoList inputTodo={inputTodo}/>
          <ErrorMessage todo={todo}/>
          <TodoList todo={todo} deleteList={deleteList}/>
        </LayoutComponent>
      </center>
    </>
  );
}

export default App;
