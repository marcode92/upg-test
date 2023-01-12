import express from 'express'
const app = express();

import {getUsers, getUser, createUser} from './database.js'

app.use(express.json())

app.get("/users", async (req,res)=>{
    const users = await getUsers();
    res.send(users);
})

app.get("/user/:id", async (req,res)=>{
    const id = req.params.id
    const user = await getUser(id);
    res.send(user);
})

app.post("/createuser", async (req,res) => {
    const {id_upg,name,surname,upg_testcol,city,id} = req.body
    const userCreated = await createUser(id_upg,name,surname,upg_testcol,city,id)
    res.send(userCreated);
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(8080, () => {
    console.log("server listeing ")
})