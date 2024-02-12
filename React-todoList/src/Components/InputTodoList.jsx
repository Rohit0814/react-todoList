import { useState } from 'react'
import style from './InputTodoList.module.css'

const InputTodoList = ({inputTodo}) => {

    let [title,setTitle] = useState("");
    let [timing,setTiming] = useState("");

    const inputTitle = (event) =>{
        const newTitle=event.target.value;
        setTitle(newTitle);
    }

    const inputTiming = (event) =>{
        const newTiming=event.target.value;
        setTiming(newTiming);
    }

    const handleAddBtn = () =>{
        inputTodo(title,timing);
        setTitle("");
        setTiming("");
    }

    return( 
        <div className={style['input-view']}>
    <div className="container text-center">
    <div className="row">
      <div className="col">
        <input
          type="text"
          className="form-control"
          value={title}
          id="exampleFormControlInput1"
          placeholder="Todo List"
          onChange={inputTitle}
        />
      </div>
      <div className="col">
        <input
          type="date"
          value={timing}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Todo List"
          onChange={inputTiming}
        />
      </div>
      <div className="col">
        <button type="button" className="btn btn-primary" onClick={handleAddBtn}>
          ADD
        </button>
      </div>
    </div>
  </div>
  </div>
    )
}

export default InputTodoList;