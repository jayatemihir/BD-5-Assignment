const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

let nextUserID = 1;
let nextPostID = 1;

// Read
app.get('/users', (request, response) => {
  response.json({ message: 'List of all users' });
});

app.get('/users/:id', (request, response) => {
  const id = request.params.id;
  response.json({ message: `Details for user with ID ${id}` });
});

app.get('/users/:id/posts', (request, response) => {
  const id = request.params.id;
  response.json({ message: `Posts for User ID: ${id}` });
});

app.get('/users/:id/posts/:postID', (request, response) => {
  const id = request.params.id;
  const postID = request.params.postID;
  response.json({ message: `Post with ID ${postID} for User ID: ${id}` });
});

// Create
app.post('/users', (request, response) => {
  const id = nextUserID++;
  response.json({ message: `New user created with ID ${id}` });
});

app.post('/users/:id/posts', (request, response) => {
  const id = request.params.id;
  const postID = nextPostID++;
  response.json({
    message: `New post with ID ${postID} created for user ID: ${id}`,
  });
});

// Update
app.put(`/users/:id`, (request, response) => {
  const id = request.params.id;
  response.json({ message: `Data updated for the user ID ${id}` });
});

app.put('/users/:id/posts/:postID', (request, response) => {
  const id = request.params.id;
  const postID = request.params.postID;
  response.json({
    message: `Post with ID ${postID} updated for user ID: ${id}`,
  });
});

// Delete
app.delete('/users/:id', (request, response) => {
  const id = request.params.id;
  response.json({ message: `User with ID ${id} deleted successfully` });
});

app.delete('/users/:id/posts', (request, response) => {
  const id = request.params.id;
  response.json({ message: `All posts deleted for user ID: ${id}` });
});

app.delete('/users/:id/posts/:postID', (request, response) => {
  const id = request.params.id;
  const postID = request.params.postID;
  response.json({
    message: `Post with ID ${postID} deleted for user ID: ${id}`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
