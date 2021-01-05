import {createDiv, createInput, createLabel} from "./HTML.js";

document.getElementById("result").appendChild(createDiv());
document.getElementById("result").appendChild(createLabel("E-mail:"));
document.getElementById("result").appendChild(createInput("email","chloe.ardoise@gmail.com"));
document.getElementById("result").appendChild(createLabel("Password:"));
document.getElementById("result").appendChild(createInput("password","blabla2"));
