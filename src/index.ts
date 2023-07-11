import connectDB from "./connection/DBConnect"
import express, {Response, Request} from 'express';
import cors from 'cors'
import config from "./config/config";
import {Server} from 'http'
import cookieParser from 'cookie-parser';
const app = express()

connectDB()
app.use(cors())
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Importing routes
import router from "./routes";

app.use("/", router);

app.get('/', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})
 
app.listen(config.port, () => {
  console.log(`Cow Hut app listening on port ${config.port}`)
})
