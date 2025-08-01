import { createElement } from "./createElement";

import { parseISO } from "date-fns";

import createTask from "../objects/Task";
import createTodoDisplay from "./createTodoDisplay";

import displayFormValidity from "../helper-functions/validateForm";

import Status from "../enums/Status";

const inputTemplates = [
    {
        type: "text",
        id: "title",
        name: "title",
        required: "true",
    },
    {
        type: "date",
        id: "dueDate",
        name: "dueDate",
    }
];

let formInputs = [];

const createFormInput = (input, mainForm) => {
    const id = input.id;

    const container = createElement({
        type: "div",
        class: "form-element-div",
        appendTo: mainForm,
    });

    createElement({
        type: "label",
        elementAttributes: {
            for: id,
        },
        textContent: id.charAt(0).toUpperCase() + id.substring(1),
        appendTo: container,
    });

    const inputElement = createElement({
        type: "input",
        elementAttributes: input,
        appendTo: container,
    });

    return {
        id: inputElement,
    };
}

const processForm = (mainForm, project) => {
    if (mainForm.checkValidity() == true) {
        displayFormValidity(mainForm, true);

        const formData = new FormData(mainForm);

        const taskTitle = formData.get("title");
        const dueDate = formData.get("dueDate");

        let newTask = createTask({
            title: taskTitle,
            dueDate: dueDate !== "" ? new Date(parseISO(dueDate)) : null,
            status: Status.INCOMPLETE,
        });

        createTodoDisplay(newTask, project);

        mainForm.parentNode.remove();
    } else {
        displayFormValidity(mainForm, false);
    };
}

const createNewTaskForm = (todoList, project) => {
    const mainDiv = createElement({
        type: "div",
        class: "new-task-form",
        appendTo: todoList,
    });

    const mainForm = createElement({
        type: "form",
        appendTo: mainDiv,
    });

    for (let input of inputTemplates) {
        formInputs.push(createFormInput(input, mainForm));
    };

    const submitButton = createElement({
        type: "input",
        elementAttributes: {
            type: "submit",
            value: "Create"
        },
        appendTo: mainForm,
    });

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        processForm(mainForm, project)
    });
};

export default createNewTaskForm;