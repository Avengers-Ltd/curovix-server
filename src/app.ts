import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'

const app: Application = express()

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true
  })
)

app.use(express.json())
app.use(cookieParser())

// app.use("/api/v1", router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Next Level Developers 👋!!!')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
