const express = require("express");

const users = require("./users.json");

const app = express();

app.use(express.json());

app.get("/", function (request, response) {
 return response.send("Welcome to Home page");
})

app.get("/users", function (request, response) {
  return response.send({data:users});
})

app.post("/users", function (request, response) {
    const userData = request.body; console.log(userData);
    users.push(userData);
    return response.send(userData);
})

app.patch("/users/:id", function (request, response) {
    const ids = request.params.id;
    const output = users.find(({ id }) => id == ids);
   // console.log(output);
    return response.send(output);
})

app.delete("/users/:id", function (request, response) {
     const ids = request.params.id;
    users.pop();
    return response.send("");
})



app.listen(5005, () => {
    console.log("Listening on port 5005");
})