require('dotenv').config();

import * as express from 'express';
import  * as mongoose from 'mongoose'
import { json } from 'body-parser';
import router from './routes'

const app = express()
app.use(json())
app.use('/', router)

mongoose.connect(process.env.MONGO_URI as string, {
}, () => {
  console.log('connected to database')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})