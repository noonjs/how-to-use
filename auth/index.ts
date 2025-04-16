import Client from "noonjs-client";

const client = new Client();

const { access } = await client.auth().register({ username, password });

