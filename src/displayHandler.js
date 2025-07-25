import {createElement, createDivider} from "./createElement";


const main = document.querySelector("main");

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

    const todoList = createElement({
        type: "div",
        class: "todo-list",
        appendTo: projDiv,
    });

    createAddTaskPrompt(todoList);
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


    
};

export {createProjectDisplay, createTodoDisplay};