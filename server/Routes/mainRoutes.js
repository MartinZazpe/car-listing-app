const app = require('express')

const router = app.Router()

const controller = require('../Controllers/indexController.js')


router.get('/', controller.home)

router.post('/add', controller.add)

// router.put('/edit', controller.edit)

router.delete('/delete/:id', controller.delete)


module.exports = router