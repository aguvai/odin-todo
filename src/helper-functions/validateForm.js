function displayFormValidity(form, isValid) {
    if (!isValid) {
        let invalidElements = form.querySelectorAll(':invalid');

        invalidElements[0].focus();

        invalidElements.forEach((element) => element.style.outline = "2px solid red")
    }

    let validElements = form.querySelectorAll(':valid');
    validElements.forEach((element) => element.style.outline = "none");
}

export default displayFormValidity;