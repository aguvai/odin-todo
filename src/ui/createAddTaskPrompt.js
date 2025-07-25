import { createElement, createDivider } from "./createElement";

const createAddTaskPrompt = (todoList) => {
    const addTask = createElement({
        type: "div",
        class: `add-task-prompt`,
        appendTo: todoList,
    });

    createDivider(addTask);

    const icon = createElement({
        type: "button",
        class: "add-task-button",
        appendTo: addTask,
    });

    const textField = createElement({
        type: "input",
        elementAttributes: {
            type: "text",
            placeholder: "Add task...",
            name: "task-name-input"
        },
        appendTo: addTask,
    });
}

export default createAddTaskPrompt;