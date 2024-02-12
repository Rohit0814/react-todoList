import style from './header.module.css'

const TodoHeader =()=>{
    return <>
        <div className={style['heading']}>
            <h1>Todo List</h1>
        </div>
    </>
}

export default TodoHeader;