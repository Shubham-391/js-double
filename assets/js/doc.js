let x = 1;
for (i = 0; i < 31; i++){
    let output = x;
    x = x * 2;
    let para = document.createElement("p");
    let node = document.createTextNode(output);
    para.appendChild(node);
    let element = document.body;
    element.appendChild(para);
}