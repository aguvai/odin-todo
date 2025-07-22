const createToDo = ({ title, description, notes, dueDate, priority, status }) => {
    return {
        getTitle: () => title,
        getDescription: () => description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        getNotes: () => notes,
        getStatus: () => status,
    };
};

export default createToDo;
