import {createElement, createDivider} from "./createElement";
import createAddTaskPrompt from "./createAddTaskPrompt";

const main = document.querySelector("main");

const createProjectDisplay = (project) => {
    const projDiv = createElement({
        type: "div",
        class: `project-${project.getID()}`,
        appendTo: main,
    });
    
    const highlight = createElement({
        type: "div",
        class: "highlight",
        appendTo: projDiv,
    });

    createElement({
        type: "h3",
        class: `header`,
        textContent: project.getTitle(),
        appendTo: projDiv,
    });

    const todoList = createElement({
        type: "div",
        class: "todo-list",
        appendTo: projDiv,
    });

    createAddTaskPrompt(todoList);
};

export default createProjectDisplay;