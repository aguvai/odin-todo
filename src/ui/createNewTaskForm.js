import { createElement } from "./createElement";

const formInputs = [
    {
        type: "text",
        id: "title",
    },
    {
        type: "date",
        id: "dueDate",
    }
]

const createFormInput = (input, mainForm) => {
            const container = createElement({
            type: "div",
            class: "form-element-div",
            appendTo: mainForm,
        });

        createElement({
            type: "label",
            elementAttributes: {
                for: input.id,
            },
            textContent: input.id.charAt(0).toUpperCase() + input.id.substring(1),
            appendTo: container,
        });

        createElement({
            type: "input",
            elementAttributes: input,
            appendTo: container,
        });
}

const createNewTaskForm = (todoList) => {
    const mainDiv = createElement({
        type: "div",
        class: "new-task-form",
        appendTo: todoList,
    });

    const mainForm = createElement({
        type: "form",
        appendTo: mainDiv,
    });

    for (let input of formInputs) {
        createFormInput(input, mainForm)
    };

    const submitButton = createElement({
        type: "input",
        elementAttributes: {
            type: "submit",
        },
        appendTo: mainForm,
        textContent: "Create"
    });
};

export default createNewTaskForm;