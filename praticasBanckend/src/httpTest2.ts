import express from 'express';
import {createServer} from 'http';

const router = express.Router()
const app = express()
const server = createServer(app)
app.use(express.json())

let db = [
  {id: "1", title: "hello", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "2", title: "hello2", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "3", title: "hello3", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "4", title: "hello4", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" },
  {id: "5", title: "hello5", body: "asdadasdad", create_at: "asdasd", updated_at: "asdasd" }
]


// Implementação de rotas com o metodo Router do express através de dados estaticos
router.route('/')
  .all((req, res, next) => {
    next()
  })
  .get((req, res) => {
    res.send(db)
    res.status(200)
    res.end()
  })
  .post((req, res) => {
    db.push(req.body);
    res.status(201)
    res.end()
  })

router
  .param('id', (req, res, next, id) => {
      next()
  })
  .route('/:id')
  .get((req, res) => {
      const ret = db.find((e) => e.id === req.params.id)
      if (ret) {
          res.send(ret)
      } else {
          res.status(404).end()
      }
  })    
  .put((req, res) => {
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
  .delete((req, res) => {
      const ret = db.find((e) => e.id === req.params.id)
      if (ret) {
          db = db.filter((e) => e.id !== req.params.id)
          res.status(204)
          res.end()
      } else {
          res.status(404).end()
      }
  })



app.use('/posts', router)
export { server }
