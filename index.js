import express from 'express'
const app = express()
import connection from './connection/index.js'

app.listen(8080, () => {
    console.log('listening to http://localhost:8080')
})