import { server } from './httpTest2'

const port = 3000

server.listen(port, () => console.log(`Running on port: ${port}`))
