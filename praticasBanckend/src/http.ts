import fs from 'fs';
import express from 'express';
import {createServer} from 'http';
import { Client } from 'pg'


const app = express()
const server = createServer(app)

app.use(express.json())


// req => Interface de requisição HTTP, pegar o cabeçalho enviado pelo cliente/navegador.
// res => Interface de resposta HTTP, enviar cabeçalhos e o corpo para o navegador.
// app.get('/', (req,res) => {
  
//   //fs.readFileSync => ler o arquivo e retorna seu conteúdo. Possui dois argumentos: caminho(pega o caminho relativo do arquivo de texto) e opções(é um parâmetro opcional que contém a codificação e o sinalizador.).
//   const content = fs.readFileSync(__dirname + '/public/index.html', 'utf-8')

//   //informações adicionais podem ser enviadas na requisição e na resposta
//   console.log(req.headers);
//   res.send(content)
// })



let db = [
  {id: "1", title: "hello", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "2", title: "hello2", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "3", title: "hello3", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "4", title: "hello4", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "5", title: "hello5", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" }
]

// Ler todos as informações 
app.get('/posts', (req, res) => {
  res.send(db)
})

// Criar uma nova informação
app.post('/posts', (req, res) => {
  db.push(req.body);
  res.status(201)
  res.end()
})

// ALterando as informações 
app.put('/posts/:id', (req, res) => {
  const ret = db.find((e) => e.id === req.params.id)
  if (ret) {
    db = db.map((e) => {
        if (e.id === req.params.id) {
            return req.body
        } else {
            return e
        }
    })
    res.status(202)
    res.end()
  } else {
      res.status(404).end()
  }
})

export { server }
