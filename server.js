

import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {

    req.send("Olá, rota acessada com sucesso!")
})

app.listen(3000)