const formBlock = () => {
  const form = document.querySelector("form");
  const qnaLi = document.querySelectorAll(".qna-accordion__item");
  const panelTop = document.querySelectorAll(".panel-top");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  })

  for(let i = 0; i < panelTop.length; i++) {
    panelTop[i].addEventListener("click", (e) => {
      e.target.parentNode.classList.toggle("active");
      
      if(e.target.parentNode.classList.contains("active")) {
        for(let a = 0; a < qnaLi.length; a++) {
          qnaLi[a].classList.remove("active");
          e.target.parentNode.classList.add("active");
          
        }
      }
    })
  }
}

export default formBlock;
