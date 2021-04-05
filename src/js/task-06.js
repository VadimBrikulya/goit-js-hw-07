const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("change", validationFn);
function validationFn(e) {
  e.currentTarget.selectionStart >= e.currentTarget.dataset.length
    ? validationInput.classList.add("valid") ||
      validationInput.classList.remove("invalid")
        : validationInput.classList.add("invalid");
    
}
