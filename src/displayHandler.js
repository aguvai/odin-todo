import {createElement, createDivider} from "./createElement";


const main = document.querySelector("main");


const createProjectDisplay = (project) => {
    const projDiv = createElement({
        type: "div",
        class: `project-${project.getID()}`,
        appendTo: main,
    });
    
    createElement({
        type: "h3",
        class: `header`,
        textContent: project.getTitle(),
        appendTo: projDiv,
    });

    const todoDiv = createElement({
        type: "div",
        class: "todo-list",
        appendTo: projDiv,
    });
};


const createTodoDisplay = (todo, project) => {
    const projectDiv = main.querySelector(`.project-${project.getID()}`);
    const todoList = projectDiv.querySelector(".todo-list");

    const todoDiv = createElement({
        type: "div",
        class: `todo-${todo.getID()}`,
        appendTo: todoList,
    });

    createDivider(todoDiv);

    

    createDivider(todoDiv);
};

export {createProjectDisplay, createTodoDisplay};