import express from 'express'
const app = express();

import {getUsers, getUser, createUser, deleteUser} from './database.js'

app.use(express.json())
//LIST OF USERS
app.get("/users", async (req,res)=>{
    const users = await getUsers();
    res.send(users);
})

//USER
app.get("/user/:id", async (req,res)=>{
    const id = req.params.id
    const user = await getUser(id);
    res.send(user);
})

//CREATE USER
app.post("/createuser", async (req,res) => {
    const {name,surname,city} = req.body
    const userCreated = await createUser(name,surname,city)
    res.send(userCreated);
})

app.delete("/deleteuser/:id", async (req,res) => {
    const id = req.params.id
    const user = await deleteUser(id);
    res.send("user");
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(8080, () => {
    console.log("server listeing ")
})