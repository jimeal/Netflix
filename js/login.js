
const loginForm = () => {
  const formInputEl = document.querySelectorAll("input:not([type=\"checkbox\"]")
  for(let i = 0; i < formInputEl.length; i++) {
    formInputEl[i].addEventListener("blur", (e) => {
      const placeholder = document.querySelectorAll(".placeholder");
      const inputElValue = e.target.value;
      if(inputElValue) {
        placeholder[i].style.top = "14px";
        placeholder[i].style.fontSize = "12px";
      }else {
        placeholder[i].style.top = "50%";
        placeholder[i].style.fontSize = "16px";
      }
    })
  }
}
export default loginForm;