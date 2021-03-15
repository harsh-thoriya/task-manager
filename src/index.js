const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const mongoose = require('mongoose')

const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})