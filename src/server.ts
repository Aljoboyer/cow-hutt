import connectDB from "./connection/DBConnect"
import express, {Response, Request} from 'express';
import cors from 'cors'
import config from "../src/config/config";
import {Server} from 'http'
const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Importing route
import router from "./routes";

app.use("/", router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
  // throw new ApiError(400, 'This is an Error')
    
})
 
app.listen(config.port, () => {
  console.log(`Cow Hut app listening on port ${config.port}`)
})
