//Local requires
const userModel = require('../database/model/UserModel');
const mongo = require('../database/mongodb');

class userServise {

    constructor() {
    }

    static createUser = async (code) => {

        const addUser = await userModel.insert(code);

        if(!addUser) {
            throw new Error('Error: The operation was not performed');
        }
        return { result: 'User has been succsessfully added' }
    }

    static getUsers = async (code) => {

        const getUsers = await userModel.get(code);

        if(!getUsers) {
            throw new Error('Error: The operation was not performed');
        }
        return { result: getUsers }
    }

    static getUserByEmail = async (email) => {

        const getUserByEmail = await userModel.getByEmail(email);

        if(!getUserByEmail) {
            throw new Error('Error: The operation was not performed');
        }
        return { result: getUserByEmail }; 
    }

    static updateUserByEmail = async (email, body) => {

        const userEmail = await userModel.getByEmail(email);
        const updateUser = await userModel.updateUser(userEmail.email, body);

        if(!updateUser) {
            throw new Error('Error: The operation was not performed');
        }
        return { result: updateUser };         
    }
    
    static deleteUser = async (email) => {

        const userEmail = await userModel.getByEmail(email);
        const result = await userModel.deleteUser(userEmail.email);

        if(!result) {
            throw new Error('Error: The operation was not performed');
        }
        return { result: 'User deleted' }
    }
}

module.exports = userServise;