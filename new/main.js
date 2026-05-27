const input = document.querySelector(".task");
const addBtn = document.querySelector(".add");
const tasksContainer = document.querySelector(".tasks");

let tasksArr = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", () => {
  let text = input.value;
  tasksArr.push({
    id: crypto.randomUUID(),
    todo: text,
  });
  localStorage.setItem("tasks", JSON.stringify(tasksArr));

  if (text) {
    render();
  }
});

function render() {
  tasksArr.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `<input type="checkbox" id="todo">
            <label for="todo">${task.todo}</label>`;

    tasksContainer.append(li);
    tasksArr = [];
  });
}

render();
