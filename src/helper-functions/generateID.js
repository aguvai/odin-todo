let projectId = 0;
let todoID = 0;

const generateProjectID = () => {return ++projectId};
const generateTodoID = () => {return ++todoID};

export {generateProjectID, generateTodoID};