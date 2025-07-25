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
        class: `todos-${project.getID()}`,
        appendTo: projDiv,
    });
};


const createTodoDisplay = (todo, project) => {
    projectDiv = main.querySelector(`{project-${project.getID()}}`)
    todosDiv = projectDiv.querySelector(`todos-${project.getID()}`)

    const todoDiv = createElement({
        type: "div",
        class: "todo-"
    });

    createDivider();

    

    createDivider();
};

export {createProjectDisplay, createTodoDisplay};