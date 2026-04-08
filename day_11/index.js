import express from 'express';
import {
    createUser,
    readUsers,
    updateUsers,
    deleteUser
} from "./controller/crud.js";
import dbConnect from './config/db.js';

const app = express();
const PORT = 8800;

dbConnect();
app.get("/users", readUsers);
app.post("/users", createUser);
app.put("/users/:email", updateUsers);
app.delete("/users:email", deleteUser);

app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));