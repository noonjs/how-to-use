import Client from "noonjs-client";

const client = new Client();

const todo = await client.collection("todos").post({ title: "Buy milk" });

// result
// {
//      "_id": "64b7f9c2e4b0a3d2f8e9a123"
//      "title": "Buy milk",
//      "user": "64b7f9c2e4b0a3d2f8e9a456",
//      "__v": 0
// }


// this 64c8e7d3f5a9b4d3e7f1c789 belongs to another user.
const patched = await client.collection("todos").patch("64c8e7d3f5a9b4d3e7f1c789", { title: "Buy apples" });

// result
// {
//      "error": "method_not_allowed"
// }