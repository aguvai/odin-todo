const createProject = ({title, todos = []}) => {
    return {
        getTitle: () => title,
        getTodos: () => todos.map((todo) => todo.getTitle()),
        addTodo: (todo) => todos.push(todo),
    }
}

export default createProject;