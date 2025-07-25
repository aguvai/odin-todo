import {createElement, createDivider} from "./createElement";


const main = document.querySelector("main");


const createProjectDisplay = (project) => {
    const projectID = project.getTitle().replace(/\s/g, "").toLowerCase();

    const projDiv = createElement({
        type: "div",
        class: `project-${projectID}`,
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
        class: `todos-${projectID}`,
        appendTo: projDiv,
    });
    
};

const createTodoDisplay = (todo, project) => {
    createDivider();

    

    createDivider();
};

export {createProjectDisplay, createTodoDisplay};