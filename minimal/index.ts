import Client from "noonjs/client"

const client = new Client();

const todo = await client.collection("todos").post({ title: "Buy milk" })