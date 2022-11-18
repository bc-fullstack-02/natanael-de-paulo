import { Client } from "pg"


async function conn() : Promise<Client> {
  const client = new Client({
      connectionString: "postgresql://postgres:postgres@localhost:5432/postgres"
  })
  return client.connect()
  .then(() => {
      return client
  })
}

export default conn