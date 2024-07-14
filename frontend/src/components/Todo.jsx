export function Todo({ todo }) {
  return (
    <div>
      {todo.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed ? "Mark as incomplete" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
