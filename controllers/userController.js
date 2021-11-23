//login controller 

module.exports ={
    login (req, res){
        let name = req.body.name
        let email = req.body.email

        res.json({
            message:`Welcome ${name}, we will contact with you by ${email}`
        })
    },

    register(req, res){
        //read client data
        //validation check user data
        //check for duplicate user
        //new user object
        //save to database
        //response back with new data
    }
}