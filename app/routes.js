const express = require('express')
const router = express.Router()

const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')


router.get('/', (req,res)=>{
    res.json({foo:'bar'})
})

router.get('/address',AddressController.all)

router.get('/users',UserController.findAll)
router.post('/users/create',UserController.create)

module.exports= router;