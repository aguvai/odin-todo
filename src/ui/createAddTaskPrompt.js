import { createElement, createDivider } from "./createElement";
import createNewTaskForm from "./createNewTaskForm";

const createAddTaskPrompt = (todoList, project) => {
    const addTaskDiv = createElement({
        type: "div",
        class: `add-task-prompt`,
        appendTo: todoList,
    });

    createDivider(addTaskDiv);

    const addButton = createElement({
        type: "button",
        class: "complete-button",
        textContent: "+",
        appendTo: addTaskDiv,
    });

    const text = createElement({
        type: "p",
        textContent: "Add task...",
        appendTo: addTaskDiv,
    })

    addTaskDiv.addEventListener("click", (e) => {
        if (!todoList.querySelector(".new-task-form")) createNewTaskForm(todoList, project);
    })

}

export default createAddTaskPrompt;