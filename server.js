/* eslint import/no-dynamic-require: 1 */
const bodyParser = require('body-parser')
const express = require('express')
const data = require('./data/data')
const meta = require('./data/meta')
const config = require('./config/config')

const { truffleBuildPath } = config
const { networkId } = config
const tokenArtifact = require(truffleBuildPath)

const app = express()

app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static(`${__dirname}/public`))

const router = express.Router()

router.get('/pokemons/:id', (req, res) => {
  const { id } = req.params
  const pokemon = data[id]
  if (pokemon !== undefined) {
    res.send(pokemon)
  } else {
    res.send({
      error: 404,
      message: 'not found',
    })
  }
})

router.get('/pokemons/:id/meta', (req, res) => {
  const { id } = req.params
  const pokemon = meta[id]
  if (pokemon !== undefined) {
    res.send(pokemon)
  } else {
    res.send({
      error: 404,
      message: 'not found',
    })
  }
})

router.get('/config', (req, res) => {
  res.send({
    tokenArtifact,
    networkId,
  })
})

router.get('*', (req, res) => {
  res.sendfile('./public/index.html')
})

app.use('/api', router)
app.listen(3000, () => {
  console.log('Listening at port 3000... ')
})
