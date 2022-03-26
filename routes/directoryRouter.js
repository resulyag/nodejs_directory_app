const directoryController = require('../controllers/directoryController.js')

const router = require('express').Router()

router.post('/addDirectory', directoryController.addDirectory)

router.get('/allDirectories', directoryController.getAllDirectories)

// router.get('/published', directoryController.getPublishedProduct)


// router.get('/:id', directoryController.getOneDirectory)

// router.put('/:id', directoryController.updateDirectory)

// router.delete('/:id', directoryController.deleteDirectory)

module.exports = router