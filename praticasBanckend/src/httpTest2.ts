import express from 'express';
import {createServer} from 'http';
import conn from './dbconfig';

const router = express.Router()
const app = express()
const server = createServer(app)
app.use(express.json())

// Implementação de rotas com o metodo Router do express através de dados estaticos
router.route('/')
  .all(async(req, res, next) => {
    return conn().then(client => {
      req.body.db = client
      next()
    })
  })
  .get((req, res) => {
    req.body.db.query("SELECT id, title, body FROM posts;")
    .then((data : any) => {
      console.log(data.rows);
      
      res.send(data.rows)
    }).catch((e: any) => {
      res.status(500).end()
    })
  })
  .post((req, res) => {
    const {id, title, body} = req.body
   const ret = req.body.db.query(`SELECT INTO (id, title, body) VALUES(${id}, ${title}, ${body})`).then
    
  })

// router
//   .param('id', (req, res, next, id) => {
//       next()
//   })
//   .route('/:id')
//   .get((req, res) => {
//       const ret = db.find((e) => e.id === req.params.id)
//       if (ret) {
//           res.send(ret)
//       } else {
//           res.status(404).end()
//       }
//   })    
//   .put((req, res) => {
//       const ret = db.find((e) => e.id === req.params.id)
//       if (ret) {
//           db = db.map((e) => {
//               if (e.id === req.params.id) {
//                   return req.body
//               } else {
//                   return e
//               }
//           })
//           res.status(202)
//           res.end()
//       } else {
//           res.status(404).end()
//       }
//   })
//   .delete((req, res) => {
//       const ret = db.find((e) => e.id === req.params.id)
//       if (ret) {
//           db = db.filter((e) => e.id !== req.params.id)
//           res.status(204)
//           res.end()
//       } else {
//           res.status(404).end()
//       }
//   })



app.use('/posts', router)
export { server }
