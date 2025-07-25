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

const createDivider = (appendTo) => {
    createElement({
        type: "div",
        class: "divider",
        appendTo,
    })
}

export {createElement, createDivider};