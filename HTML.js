export function createDiv(){
    let createDiv1 = document.createElement("div");
    createDiv1.innerHTML = "Guten Tag !";
    return createDiv1;
}

export function createInput(type, value) {
    let createInput1 = document.createElement("input");
    createInput1.type = type;
    createInput1.value = value;
    return createInput1;
}

export function createLabel(text) {
    let createLabel1 = document.createElement("label");
    createLabel1.innerHTML = text;
    return createLabel1;
}