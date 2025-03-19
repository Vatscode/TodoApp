export function Todos({ todos }) {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.title}>  {/* Added key prop for list rendering */}
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>
                        {todo.completed === true ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}
