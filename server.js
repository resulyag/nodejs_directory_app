const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}


// middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers

const directoryRouter = require('./routes/directoryRouter.js')
// const routerc = require('./routes/couplingRouter.js')
app.use('/api/directory', directoryRouter)
// app.use('/api/coupling', routerc)

// testing api

app.get('/',(req, res) => {
    res.json({ message: 'hello from api' })
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, () => {
    console.log(`server is runningon port ${PORT}`)
})