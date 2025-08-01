import Status from "../enums/Status";
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

    let dueDate = todo.getDueDate();
    let dueDateContainer = null;

    const createDueDateContainer = () => {
        dueDateContainer = createElement({
            type: "div",
            class: "todo-duedate-container",
            appendTo: infoContainer,
        });

        createElement({
            type: "p",
            textContent: formatDate(dueDate),
            appendTo: dueDateContainer,
        });
    }

    if (dueDate != null) {
        createDueDateContainer()
    }

    completeButton.addEventListener("click", () => {
        let todoStatus = todo.getStatus();

        if (todoStatus === Status.COMPLETE) {
            todo.setStatus(Status.INCOMPLETE);

            completeButton.style.backgroundColor = "transparent";
            completeButton.style.backgroundImage = "";

            if (dueDate && !dueDateContainer) {
                createDueDateContainer()
            } else if (dueDate && !infoContainer.contains(dueDateContainer)) {
                infoContainer.appendChild(dueDateContainer);
            }

            todoName.style.color = "var(--offblack)";
            todoName.style.textDecoration = "none";
        } else {
            todo.setStatus(Status.COMPLETE);

            completeButton.style.backgroundColor = "gray";
            completeButton.style.backgroundImage = "url(../images/check.svg)";

            if (infoContainer.contains(dueDateContainer)) {
                infoContainer.removeChild(dueDateContainer);
            }

            todoName.style.color = "gray";
            todoName.style.textDecoration = "line-through";
        }
    });
};

export default createTodoDisplay;