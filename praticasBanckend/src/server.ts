import { server } from './http'

const port = 3000

server.listen(port, () => console.log(`Running on port: ${port}`))
