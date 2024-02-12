import style from './Todo.module.css'

const Todo = ({id,title,timing,deleteList}) =>{

    return (
    <div className={style['outer-list']}>
    <div className={`row list-group list-group-horizontal ${style['Todo-List']}`}>
    <div className="col">
      <span>{title}</span>
    </div>
    <div className="col ">
      <span>{timing}</span>
    </div>
    <div className="col ">
      <button type="button" className="btn btn-danger" onClick={() => deleteList(id)}>
        DELETE
      </button>
    </div>
  </div>
  </div>
    )
}

export default Todo