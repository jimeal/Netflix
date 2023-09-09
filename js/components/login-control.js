
const loginForm = () => {
  const formInputEl = document.querySelectorAll("input:not([type=\"checkbox\"]")

  for(let i = 0; i < formInputEl.length; i++) {
    const placeholder = document.querySelectorAll(".placeholder");
    formInputEl[i].addEventListener("blur", (e) => {
      const inputElValue = e.target.value;
      if(inputElValue) {
        placeholder[i].style.top = "14px";
        placeholder[i].style.fontSize = "12px";
      }else if(!(inputElValue)) {
        placeholder[i].style.top = "50%";
        placeholder[i].style.fontSize = "1rem";
      }
    })
    formInputEl[i].addEventListener("focus", () => {
      placeholder[i].style.top = "14px";
      placeholder[i].style.fontSize = "12px";
    })
  }
}
export default loginForm;