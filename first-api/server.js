const express = require("express");

const users = require("./usres.json");

const app = express();

app.get("/users", function (request, response) {
    return response.send("Testing get");
})

app.post("/users", function (request, response) {
    return response.send("Testing post");
})


app.delete("/users/:id", function (request, response) {
    return response.send("Testing delete");
})

app.patch("/users/:id", function (request, response) {
    return response.send("Testing patch");
})

app.listen(2345, () => {
    console.log("Listening on port 2345");
});
