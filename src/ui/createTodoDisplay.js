import formatDate from "../helper-functions/formateDate";
import { createElement, createDivider } from "./createElement";

const main = document.querySelector("main");

const createTodoDisplay = (todo, project) => {
    const projectDiv = main.querySelector(`.project-${project.getID()}`);
    const todoList = projectDiv.querySelector(".todo-list");

    const todoDiv = createElement({
        type: "div",
        class: `todo-obj-${todo.getID()}`,
        appendTo: todoList,
    });

    createDivider(todoDiv);

    const completeButton = createElement({
        type: "button",
        class: "complete-button",
        appendTo: todoDiv,
    });


    const infoContainer = createElement({
        type: "div",
        class: "todo-info-container",
        appendTo: todoDiv,
    });

    const todoName = createElement({
        type: "p",
        textContent: todo.getTitle(),
        appendTo: infoContainer,
    });


    const dueDateContainer = createElement({
        type: "div",
        class: "todo-duedate-container",
        appendTo: infoContainer,
    });

    const calendarIcon = createElement({
        type: "div",
        class: "calendar-icon",
        appendTo: dueDateContainer,
    });

    const dueDate = createElement({
        type: "p",
        textContent: formatDate(todo.getDueDate()),
        appendTo: dueDateContainer,
    });

};

export default createTodoDisplay;