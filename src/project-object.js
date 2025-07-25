import { generateProjectID } from "./generateID";

const createProject = ({title, todos = []}) => {
    const id = generateProjectID()
    
    return {
        getTitle: () => title,
        getTodos: () => todos,
        getID: () => id,
        addTodo: (todo) => todos.push(todo),
    }
}

export default createProject;