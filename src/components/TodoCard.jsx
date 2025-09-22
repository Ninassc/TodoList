export function TodoCard(props) {
    const { todo, handleCompleteTodo, handleDeleteTodo, todoIndex } = props

    const buttonCard = ["Done", "Delete"]
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                
                {buttonCard.map(b => (
                    b === "Delete" ? (
                        <button key={b} onClick={() => handleDeleteTodo(todoIndex)}>
                            <h6>{b}</h6>
                        </button>
                    ) : (
                        <button key={b} onClick={() => handleCompleteTodo(todoIndex)} disabled={todo.complete}>
                            <h6>{b}</h6>
                        </button>
                    )
                ))}

            </div>
        </div>
    )
}