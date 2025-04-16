import Client from "noonjs-client";

const client = new Client();

const todos = await client.collection("todos").get();

const todo = await client.collection("todos").post({ title: "Buy milk" });

const patched = await client.collection("todos").patch("64b7f9c2e4b0a3d2f8e9a123", { title: "Buy apples" });

await client.collection("todos").delete("64b7f9c2e4b0a3d2f8e9a123");