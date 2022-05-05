import express from 'express'

const app = express()

app.post("/users", (request, response) => {
  //chamar nosso controlador
})

app.listen(3002, () => console.log("Server is running on PORT 3002"))