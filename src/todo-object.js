const createToDo = ({ title, description, dueDate, priority, notes }) => {
    return {
        getTitle: () => title,
        getDescription: () => description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        getNotes: () => notes,
    };
};

export default createToDo;
