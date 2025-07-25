import generateID from "./generateID";

const createProject = ({title, todos = []}) => {
    const id = generateID()
    
    return {
        getTitle: () => title,
        getTodos: () => todos,
        getID: () => id,
        addTodo: (todo) => todos.push(todo),
    }
}

export default createProject;