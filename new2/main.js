//F12 opens application
// logcal storage
//session storage
//cookies

// localStorage.setItem("name");
// localStorage.getItem();

// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme"));

// sessionStorage.setItem("theme", "white");
// console.log(sessionStorage.getItem("theme"));

// localstorage - mudmivia sanam shen ar dacer sacinaagmdegos

// localStorage.clear();

// localStorage.removeItem("theme");

// TODO APP

const input = document.getElementById("text");
const addBtn = document.querySelector(".add");
const listContainer = document.querySelector(".list");

let todos = JSON.parse(localStorage.getItem("todosArr")) || [];

addBtn.addEventListener("click", () => {
  let todo = {
    id: crypto.randomUUID(),
    text: input.value,
  };

  todos.push(todo);

  localStorage.setItem("todosArr", JSON.stringify(todos));

  render();
});

function render() {
  listContainer.innerHTML = "";
  todos.forEach((e) => {
    const li = document.createElement("li");
    li.innerHTML = ` <li>
      <input type="checkbox" id="todoCkeck" />
      <label for="todoCkeck">${e.text}</label>
    </li>`;

    listContainer.append(li);
  });
}

render();
