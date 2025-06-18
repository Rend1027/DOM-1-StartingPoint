console.log("hello from JS");

const root = document.getElementById("root");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const ul = document.createElement("ul");
const p = document.createElement("p");
const li = document.createElement("li");
h1.innerText =
  "Hello! This is my HTML website created entirely from JavaScript";
h2.innerText = "Ok, we see your message? So what now!";
p.innerText = "Possible things to do:";
h1.style.fontFamily = "Georgia, serif";
root.appendChild(h1);
root.appendChild(h2);
root.appendChild(p);
root.appendChild(ul);

let num = 3;

for (let i = 0; i < num; i++) {
  const newli = document.createElement('li');
  console.log(root.appendChild(newli));
  newli.classList.add(`bullet-${i}`);
}


let liTextContent = ["Make a header", "Make a ul", "Make a footer"];

for (let i = 0; i < liTextContent.length; i++) {
  const listItem = document.querySelectorAll(`.bullet-${i}`);
  listItem[0].textContent = `${liTextContent[i]}`;
}




