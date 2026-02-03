function newTodo() {
  const text = prompt("New TO DO:");

  if (!text)
    return;

  addTodo(text);
  saveTodos();
}

function addTodo(text) {
  const ft_list = document.getElementById("ft_list");
  const div = document.createElement("div");

  div.textContent = text;

  div.onclick = function () {
    if (confirm("Remove this TO DO?")) {
      ft_list.removeChild(div);
      saveTodos();
    }
  };

  ft_list.insertBefore(div, ft_list.firstChild);
}

function saveTodos() {
  const todos = [];
  const items = document.getElementById("ft_list").children;

  for (let i = 0; i < items.length; i++)
    todos.push(items[i].textContent);

  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function loadTodos() {
  const cookies = document.cookie.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split("=");

    if (parts[0] === "todos") {
      const todos = JSON.parse(decodeURIComponent(parts[1]));
      for (let i = todos.length - 1; i >= 0; i--)
        addTodo(todos[i]);
    }
  }
}

loadTodos();
