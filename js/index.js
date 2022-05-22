const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");
const errorIcons = document.querySelectorAll(".form__icon");
const errorTexts = document.querySelectorAll(".form__error-text");

function resetValue(element) {
    element.value = "";
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function setText(element, text) {
    element.innerText = text;
}

function removeText(element) {
    element.innerText = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let errorIcon = errorIcons[i];
        let errorText = errorTexts[i];

        if (input.value === "") {
            addClass(input, "border-error");
            addClass(errorIcon, "visible");
            setText(errorText, `${input.placeholder} cannot be empty`);
        } else if (input.id === "email" && !input.value.match(pattern)) {
            addClass(input, "border-error");
            addClass(errorIcon, "visible");
            setText(errorText, "Looks like this is not an email");
        } else {
            resetValue(input);
            resetValue(errorIcon);
        }
    }
})


for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let errorIcon = errorIcons[i];
    let errorText = errorTexts[i];

    input.addEventListener("click", function () {
        removeClass(input, "border-error");
        removeClass(errorIcon, "visible");
        removeText(errorText);
    })

    input.addEventListener("keydown", function () {
        removeClass(input, "border-error");
        removeClass(errorIcon, "visible");
        removeText(errorText);
    })
}