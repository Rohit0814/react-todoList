const ErrorMessage = ({todo}) =>{
    return (
        <>
            {todo.length===0 && <h1>List Is Empty.....</h1>};
        </>
    )
}

export default ErrorMessage;