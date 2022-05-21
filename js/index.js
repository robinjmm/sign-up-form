const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");
const errorIcons = document.querySelectorAll(".form__icon");
const errorTexts = document.querySelectorAll(".form__error-text");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            inputs[i].classList.add("border-error");
            errorIcons[i].classList.add("visible");
            errorTexts[i].innerText = `${inputs[i].placeholder} cannot be empty`;
        } else if (inputs[i].id === "email" && !inputs[i].value.match(pattern)) {
            inputs[i].classList.add("border-error");
            errorIcons[i].classList.add("visible");
            errorTexts[i].innerText = "Looks like this is not an email"
        } else {
            inputs[i].value = "";
            errorIcons[i].value = "";
        }
    }
})


for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let errorIcon = errorIcons[i];
    let errorText = errorTexts[i];

    input.addEventListener("click", function () {
        input.classList.remove("border-error");
        errorIcon.classList.remove("visible");
        errorText.innerHTML = "";
    })

    input.addEventListener("keydown", function () {
        input.classList.remove("border-error");
        errorIcon.classList.remove("visible");
        errorText.innerHTML = "";
    })
}