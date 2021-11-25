//login controller 
const bcrypt = require ('bcrypt')
const User = require ('../model/User')
const registerValidator = require('../validator/registerValidator')

module.exports ={
    login (req, res){
        let name = req.body.name
        let email = req.body.email

        res.json({
            message:`Welcome ${name}, we will contact with you by ${email}`
        })
    },

    register(req, res){
        let {name, email, password, confirmPassword } = req.body
        let validate = registerValidator({name, email, password, confirmPassword})


        if(!validate.isValid){

            res.status(400).json(validate.error)
            
        } else {
          console.log(email)

           User.findOne({ email })
               .then(user => {
                    console.log(user)
                    res.json({user})
                })
               .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        message: 'Server Error occured'
                    })
                })
                
        }
        //read client data
        //validation check user data
        //check for duplicate user
        //new user object
        //save to database
        //response back with new data
    }
}