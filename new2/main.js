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
// const addBtn = document.querySelector(".add");
const listContainer = document.querySelector(".list");

let todos = JSON.parse(localStorage.getItem("todosArr")) || [];

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let todo = {
      // id: crypto.randomUUID(),
      id: 1,
      text: input.value,
      completed: false,
    };

    todos.push(todo);

    localStorage.setItem("todosArr", JSON.stringify(todos));

    render();
  }
});

function render() {
  listContainer.innerHTML = "";
  todos.forEach((e) => {
    const li = document.createElement("li");
    li.innerHTML = ` <li>
      <input type="checkbox" ${e.completed ? "checked" : ""} id="${e.id}" />
      <label for="${e.id}">${e.text}</label>
    </li>`;

    listContainer.append(li);

    const checkbox = li.querySelector("input");

    checkbox.addEventListener("click", () => {
      e.completed = checkbox.checked;
      localStorage.setItem("todosArr", JSON.stringify(todos));
    });
  });
}

render();
