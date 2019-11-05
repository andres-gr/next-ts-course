import 'Startup/dotenv'
import create from './server'

const server = create()

server.start(
  {
    cors: {
      credentials : true,
      origin      : `${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`,
    },
    port: process.env.APP_PORT,
  },
  ({ port }) => {
    console.log(`Server is running on port: ${port}.`)
  },
)
