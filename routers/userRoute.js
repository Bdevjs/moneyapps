const router = require('express').Router()
const {login} = require('../controllers/userController')



//Registration Route
router.post('/register', (req, res)=>{

})

//login route 
router.post('/login', login)



module.exports = router