const validator = require('validator')

const validate = user =>{
    let error = {}

    if(!user.name){
        error.name = 'Please provide Your Name'
    }

    if (!user.email) {
        error.email = "Provide your Email"
    }else if(!validator.isEmail(user.email)) {
        error.email = 'please Provide a valide Email'
    }

    if (!user.password) {
        error.password = 'please provide a password'
    }else if(user.password.length < 6) {
        error.password = 'Password Must be Greater or equal 6 charachter'
    }


    if (!user.confirmPassword) {
        error.confirmPassword = 'Please provide Confirmation Password'
    }else if (user.password != user.confirmPassword){
        error.confirmPassword = 'Password Does not match'
    }

    return {
        error,
        isValid: Object.keys(error).length == 0
    }
}
module.exports = validate