import { createElement, createDivider } from "./createElement";

const main = document.querySelector("main");

const createTodoDisplay = (todo, project) => {
    const projectDiv = main.querySelector(`.project-${project.getID()}`);
    const todoList = projectDiv.querySelector(".todo-list");

    const todoDiv = createElement({
        type: "div",
        class: `todo-${todo.getID()}`,
        appendTo: todoList,
    });

    createDivider(todoDiv);

    const checkbox = createElement({
        type: "input",
        elementAttributes: {
            type: "checkbox",
            name: "completed"
        },
        appendTo: todoDiv,
    });

    const todoName = createElement({
        type: "input",
        elementAttributes: {
            type: "text",
            value: todo.getTitle(),
            name: "task-name"
        },
        appendTo: todoDiv,
    });

};

export default createTodoDisplay;