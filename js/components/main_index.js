const mainInput = () => {
  const mainFormBox = document.querySelector(".form-input");
  const mainFormInput = document.querySelector(".form-input__input")
  mainFormBox.addEventListener("click", (e) => {
    e.target.focus()
    mainFormInput.addEventListener("focus", (e) => {
      e.target.nextElementSibling.style.top = "14px";
      e.target.nextElementSibling.style.fontSize = "12px";
    })
  })
  mainFormInput.addEventListener("blur", (e) => {
    console.log(e.target)
    e.target.nextElementSibling.style.top = "50%";
    e.target.nextElementSibling.style.fontSize = "1rem";
  })
}

export default mainInput;