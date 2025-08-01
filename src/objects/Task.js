import { generateTodoID } from "../helper-functions/generateID";

const createTask = ({ title, description, notes, dueDate, priority, status }) => {
    const id = generateTodoID();

    return {
        getTitle: () => title,
        getDescription: () => description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        getNotes: () => notes,
        getStatus: () => status,
        getID: () => id,

        setStatus: (newStatus) => status = newStatus,
    };
};

export default createTask;
