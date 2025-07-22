const createToDo = ({ title, description, dueDate, priority, notes, status }) => {
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
