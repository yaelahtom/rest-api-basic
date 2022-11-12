import express, { response } from 'express'
import { nanoid } from 'nanoid'
const app = express()
app.use(express.json())

let userlist = [
    {
        id: nanoid(),
        name: "tomi",
        age: 19,
        married: true
    },
    {
        id: nanoid(),
        name: "putri",
        age: 19,
        married: true
    },
    {
        id: nanoid(),
        name: "simon",
        age: 42,
        married: false
    }
]

app.get('/users', (request, response) => {
    response.json(userlist)
})

app.post("/users", (request, response) => {
    // we wanna grab data sent by client
    // then add data to userList
    // return new list

    const newUser = request.body
    userlist.push(newUser)
    response.json(userlist)
})

app.put('/users', (request, response) => {
    // grab the new namme
    // loop thru list
    // update the new list

    const newName = request.body.newName
    for (let i = 0; i < userlist.length; i++) {
        userlist[i].name = newName
    }

    response.json(userlist)
})

app.delete('/users/:id', (request, response) => {
    // get the id
    // delete user with id
    // return list
    const id = request.params.id
    for (let i = 0; i < userlist.length; i++) {
        if (userlist[i].id == id) {
            userlist.splice(i, 1)
        }
    }
    response.json(userlist)
})




app.listen('3001', () => {
    console.log('server running on port 3001')
})