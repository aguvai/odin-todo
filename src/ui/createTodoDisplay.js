import Status from "../enums/status";
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

    const dueDate = createElement({
        type: "p",
        textContent: formatDate(todo.getDueDate()),
        appendTo: dueDateContainer,
    });


    completeButton.addEventListener("click", (e) => {
        let todoStatus = todo.getStatus();
        if (todoStatus == Status.COMPLETE) {
            todo.setStatus(Status.INCOMPLETE);
            
            completeButton.style.backgroundColor = "transparent";
            completeButton.style.backgroundImage = ""
            
            infoContainer.appendChild(dueDateContainer);

            todoDiv.style.order = "1"

            todoName.style.color = "var(--offblack)"
            todoName.style.textDecoration = "none";
        } else {
            todo.setStatus(Status.COMPLETE);
            
            completeButton.style.backgroundColor = "gray";
            completeButton.style.backgroundImage = "url(../images/check.svg)"
            
            todoDiv.style.order = "2"

            infoContainer.removeChild(dueDateContainer);

            todoName.style.color = "gray";
            todoName.style.textDecoration = "line-through";
        };
    })
};

export default createTodoDisplay;