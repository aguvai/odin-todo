import { createElement } from "./createElement";

const createNewTaskForm = (todoList) => {
    const mainDiv = createElement({
        type: "div",
        class: "new-task-form",
        appendTo: todoList,
    })
};

export default createNewTaskForm;