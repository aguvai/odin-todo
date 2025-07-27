import { createElement, createDivider } from "./createElement";

const createAddTaskPrompt = (todoList) => {
    const addTask = createElement({
        type: "div",
        class: `add-task-prompt`,
        appendTo: todoList,
    });

    createDivider(addTask);

    const completeButton = createElement({
        type: "button",
        class: "complete-button",
        appendTo: addTask,
    });

    const todoName = createElement({
        type: "p",
        textContent: "Add task...",
        appendTo: addTask,
    })
}

export default createAddTaskPrompt;