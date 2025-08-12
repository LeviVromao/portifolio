import mongoose from "mongoose";
import { config } from "dotenv";
config()

if(!process.env.MONGODB_URI) {
    throw new Error('Please make a enviroment variable with mongodb config.');
}

const createConnection = async () => {
    const uri = process.env.MONGODB_URI
    console.log(uri)
    mongoose.connect(uri)
    .then(() => console.log(' Database connected with succes'))
    .catch(err => console.error('Error', err));
}

const disconnect = async () => {
    mongoose.disconnect()
    .then(() => console.log('Disconectado'))
    .catch(err => console.error('Erro', err))
}

export { createConnection, disconnect }