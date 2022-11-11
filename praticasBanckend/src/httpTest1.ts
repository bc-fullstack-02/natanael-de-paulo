// import fs from 'fs';
// import express from 'express';
// import {createServer} from 'http';


// const router = express.Router()
// const app = express()
// const server = createServer(app)

// app.use(express.json())


// req => Interface de requisição HTTP, pegar o cabeçalho enviado pelo cliente/navegador.
// res => Interface de resposta HTTP, enviar cabeçalhos e o corpo para o navegador.
// app.get('/', (req,res) => {
  
//   //fs.readFileSync => ler o arquivo e retorna seu conteúdo. Possui dois argumentos: caminho(pega o caminho relativo do arquivo de texto) e opções(é um parâmetro opcional que contém a codificação e o sinalizador.).
//   const content = fs.readFileSync(__dirname + '/public/index.html', 'utf-8')

//   //informações adicionais podem ser enviadas na requisição e na resposta
//   console.log(req.headers);
//   res.send(content)
// })


// // Ler todos as informações 
// app.get('/posts', (req, res) => {
//   res.send(db)
// })


// // Buscar informação por id da required
// app.get('/posts/:id', (req, res) => {
//   const ret = db.find((e) => e.id === req.params.id)
  
//   if(ret) res.send(ret)
//   res.status(404).end()
// })



// // Criar uma nova informação
// app.post('/posts', (req, res) => {
//   db.push(req.body);
//   res.status(201)
//   res.end()
// })

// // ALterando as informações 
// app.put('/posts/:id', (req, res) => {
//   const ret = db.find((e) => e.id === req.params.id)
//   if (ret) {
//     db = db.map((e) => {
//         if (e.id === req.params.id) {
//             return req.body
//         } else {
//             return e
//         }
//     })
//     res.status(202)
//     res.end()
//   } else {
//       res.status(404).end()
//   }
// })


// // Deleta uma informação através do id da requisição
// app.delete('/posts/:id', (req, res) => {
//   const ret = db.find((e) => e.id === req.params.id)
//   if(ret){
//     db = db.filter((e) => e.id !== req.params.id)
//     res.status(204)
//     res.end()
//   }
//   res.status(201)
//   res.send()
// })

