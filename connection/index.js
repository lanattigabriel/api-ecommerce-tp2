import "dotenv/config"
import { Sequelize } from 'sequelize'

const database = process.env.DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dialect = process.env.DB_DIALECT

const connection = new Sequelize(database, username, password, {
    host:'localhost',
    dialect: dialect,
    port: '3306'
})

try {
    await connection.authenticate()
    console.log('connected to database')
} catch (error) {
    console.log(`Error: ${error}`)
}

export default connection