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
  if (!(input.value === "")) {
    if (e.key === "Enter") {
      let todo = {
        id: crypto.randomUUID(),
        // id: 1,
        text: input.value,
        completed: false,
      };

      todos.push(todo);

      localStorage.setItem("todosArr", JSON.stringify(todos));

      render();
      input.value = "";
    }
  }
});

let filter = "all";

const allFilter = document.querySelector(".all");
const activeFiler = document.querySelector(".active");
const completedFilter = document.querySelector(".completed");

allFilter.addEventListener("click", () => {
  filter = "all";
  render();
});

activeFiler.addEventListener("click", () => {
  filter = "active";

  render();
});

completedFilter.addEventListener("click", () => {
  filter = "completed";
  render();
});

function render() {
  listContainer.innerHTML = "";

  let filteredTasks = todos;
  if (filter === "active") {
    filteredTasks = todos.filter((t) => !t.completed);
  }

  if (filter === "completed") {
    filteredTasks = todos.filter((t) => t.completed);
  }

  filteredTasks.forEach((e) => {
    const li = document.createElement("li");
    li.innerHTML = ` <li>
      <input type="checkbox" ${e.completed ? "checked" : ""} id="${e.id}" />
      <label for="${e.id}">${e.text}</label>
      <span class="delete">X</span>
    </li>`;

    listContainer.append(li);

    const checkbox = li.querySelector("input");

    const deleteBtn = document.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== e.id);

      localStorage.setItem("todosArr", JSON.stringify(todos));
      render();
    });

    checkbox.addEventListener("click", () => {
      e.completed = checkbox.checked;
      localStorage.setItem("todosArr", JSON.stringify(todos));
    });
  });
}

render();
