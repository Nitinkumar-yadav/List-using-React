import express from "express";
const app = express();
const port = 3000;

// In-memory data structure to store the to-do list
let todolist = [];

// Middleware to parse JSON request bodies
app.use(express.json());

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
  res.json(todolist);
});

// POST /todos - Create a new todo
app.post('/todo', (req, res) => {
  const { title } = req.body;
  const todo = { id: Date.now(), title };
  todolist.push(todo);
  res.status(201).json(todo);
});

// PUT /todos/:id - Update a todo
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const todo = todoList.find((todo) => todo.id == id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.title = title;
  res.json(todo);
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  const index = todolist.findIndex((todo) => todo.id == id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deletedTodo = todolist.splice(index, 1);
  res.json(deletedTodo[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
