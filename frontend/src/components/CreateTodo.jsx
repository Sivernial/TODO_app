export function createTodo() {
    return (
        <div>
            <h1>Create a Todo</h1>
            <form>
                <label>Title</label>
                <input type="text" name="title" />
                <label>Description</label>
                <input type="text" name="description" />
                <button type="submit">Create Todo</button>
            </form>
        </div>
    );
}

