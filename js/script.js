const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');





const userInputs = document.querySelectorAll(".value-input");
const btn = document.getElementsByClassName(userInputs);
//const formFields = userInputs.querySelector(".text");
var testUserOutput = [btn];

const counter = addEventListener("click", F);
var userOutput = [];
function F()
{
    
userOutput.push(counter);
    console.log(userOutput);
    testUserOutput.push(userInputs);
    console.log(testUserOutput);
    console.log("btn " + btn);

}

 



registerLink.addEventListener("click", () => {wrapper.classList.add('active'); })

loginLink.addEventListener("click", () => { wrapper.classList.remove("active"); })

btnPopup.addEventListener("click", () => { wrapper.classList.add('active-popup'); })

iconClose.addEventListener("click", () => { wrapper.classList.remove('active-popup'); })