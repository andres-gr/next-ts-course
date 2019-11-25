import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'
import 'Startup/dotenv'
import create from './server'

type TokenDecode = {
  userId?: string
}

const server = create()

server.express.use(cookieParser())

server.express.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const result = verify(token, process.env.APP_SECRET) as TokenDecode
    req.userId = result.userId
  }
  next()
})

server.start(
  {
    cors: {
      credentials : true,
      origin      : `${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`,
    },
    port: process.env.APP_PORT,
  },
  ({ port }) => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port: ${port}.`)
  },
)
