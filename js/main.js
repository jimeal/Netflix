import '../scss/main.scss';
import formBlock from "./components/common.js";
import mainInput from './components/main_index.js';
import loginForm from "./components/login-control.js";

const NODE_ENV = process.env.NODE_ENV;

document.addEventListener("DOMContentLoaded", () => {
  formBlock();
  mainInput();
  loginForm();
  console.log(NODE_ENV)
})  


