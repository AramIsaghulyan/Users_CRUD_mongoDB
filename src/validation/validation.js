//Standard requires
const baseJoi = require('joi');
const passwordValidator = require('password-validator');
const emailValidator = require('email-validator');
const passwordHash = require('password-hash');

//Create a password-schema
let schema = new passwordValidator();

let EVMJoi = baseJoi.extend((joi) =>{

    return {
        type: 'user',
        base: joi.string(),
        messages: {
            'user.email': '{{#label}} Sorry, only letters (a-z), numbers(0-9), at (@), and periods (.) are allowed.',
            'user.password': '{{#label}} Use 8 or more characters with a mix of letters, numbers & symbols.',
            'user.age': '{{#label}} Sorry, the age you entered does not meet the requirements (age > 10 and age < 110).'
        },
        validate(value, helpers) {
            return { value };
        },
        rules: {
            Email: {
                method() {
                    return this.$_addRule('Email');
                },
                validate(value, helpers) {
                    let result = emailValidator.validate(value);
                    if(!result) {
                        return helpers.error('user.email');
                    }
                    return value;
                }
            },
            Password: {
                method() {
                    return this.$_addRule('Password');
                },
                validate(value, helpers) {
                    schema
                    .is().min(8)                                    // Minimum length 8
                    .is().max(100)                                  // Maximum length 100
                    .has().uppercase()                              // Must have uppercase letters
                    .has().lowercase()                              // Must have lowercase letters
                    .has().digits(2)                                // Must have at least 2 digits
                    .has().not().spaces()                           // Should not have spaces
                    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
                    let result = schema.validate(value);
                    if(!result) {
                        return helpers.error('user.password');
                    }
                    let hashPassword = passwordHash.generate(value);
                    return hashPassword;
                }
            },
            Age: {
                method() {
                    return this.$_addRule('Age');
                },
                validate(value, helpers) {
                    let result = Number(value);
                    if(result < 0 || result > 110) {
                        return helpers.error('user.age');
                    }
                    return value;
                }
            }
        }
    };
});

let validate = async (body, schema) => {
    
    const schem = EVMJoi.object(schema);
    const res = schem.validate(body);
    if(res.error) {
        throw new Error(res.error.messages);
    }
    return res.value;
};

module.exports = { EVMJoi, validate };