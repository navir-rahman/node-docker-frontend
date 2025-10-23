const BASE_URL = "http://localhost:5000/api/todos";

export const fetchTodos = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addTodo = async (text) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
