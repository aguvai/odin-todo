const createElement = function (properties) {
    // properties = {type, class, textContent, elementAttributes, appendTo}

    const element = document.createElement(properties.type);
   
    if (properties.class) {
        element.classList.add(properties.class);
    };

    if (properties.textContent) {
        element.textContent = properties.textContent;
    };

    if (properties.elementAttributes) {
        let attributes = properties.elementAttributes;
        for (let attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute])
        }
    };

    properties.appendTo.appendChild(element);

    return element;
};

const main = document.querySelector("main");

const createProjectDisplay = (project) => {
    const projectID = project.getTitle().replace(/\s/g, "").toLowerCase();

    const mainDiv = createElement({
        type: "div",
        class: `project-${projectID}`,
        appendTo: main,
    });
    
    createElement({
        type: "h3",
        class: `${projectID}-header`,
        textContent: project.getTitle(),
        appendTo: mainDiv,
    });
};

const createTodoDisplay = (todo) => {

};

export {createProjectDisplay, createTodoDisplay};