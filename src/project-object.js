const createProject = ({title, todos = []}) => {
    return {
        getTitle: () => title,
        getTodos: () => todos,
        addTodo: (todo) => todos.push(todo),
    }
}

export default createProject;