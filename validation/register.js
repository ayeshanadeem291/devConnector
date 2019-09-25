const validator = require('validator');
const isEpmty = require ('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};
    if(!validator.isLength(data.name,{min:2 , max:30})){
        errors.name = 'name should be bw 2 and 30 characters';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}