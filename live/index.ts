import Client from "noonjs-client";

const client = new Client();

client.collection("todos").on("created", (todo, io) => {
    if (io)
        console.log(todo);
});

const todo = await client.collection("todos").post({ title: "Buy milk" });