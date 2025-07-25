import { generateTodoID } from "./generateID";

const createToDo = ({ title, description, notes, dueDate, priority, status }) => {
    const id = generateTodoID();

    return {
        getTitle: () => title,
        getDescription: () => description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        getNotes: () => notes,
        getStatus: () => status,
        getID: () => id,
    };
};

export default createToDo;
