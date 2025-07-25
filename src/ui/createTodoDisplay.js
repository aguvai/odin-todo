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


};

export default createTodoDisplay;