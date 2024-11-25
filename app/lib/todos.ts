const url = process.env.API_URL || "http://localhost:3000";
const route = "/todo";

export async function findTodos() {
  const response = await fetch(url + route);
  return response.json();
}

export async function findTodo(id: string) {
  const response = await fetch(`${url + route}/${id}`);
  return response.json();
}

export async function addTodo(todo: any) {
  const response = await fetch(url + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return response.json();
}

export async function deleteTodo(id: number) {
  const response = await fetch(`${url + route}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function updateTodo(updatedTodo: any) {
  const response = await fetch(`${url + route}/${updatedTodo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
  return response.json();
}
