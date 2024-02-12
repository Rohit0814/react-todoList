import Todo from "./Todo";
import style from './TodoList.module.css'

const TodoList = ({todo, deleteList}) => {
    return (
    <div className={style['lists']}>
    <div className="container text-center todo-lists">
              {todo.map((item)=>(
                <Todo key={item.id} id={item.id} title={item.title}  timing={item.timing} deleteList={deleteList}/>
              ))}
          </div>
          </div>
    )
}

export default TodoList;