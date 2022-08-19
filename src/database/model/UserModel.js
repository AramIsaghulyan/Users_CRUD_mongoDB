// Standard requires

// Library requires

// Local requires
const mongo = require('../mongodb');
const userSchema = require('../schema/UserSchema');

class userModel {

    constructor() {

        this.modelName = 'Users';
        this.connection = mongo.connection.model(this.modelName, userSchema);
    };

    async insert(code) {

        return await this.connection.create(code);
    }

    async get() {

        return await this.connection.find({});
    }

    async getByEmail(email) {

        return await this.connection.findOne({ email });
    }

    async updateUser(email, body) {

        return await this.connection.updateOne({ email }, body);
    }

    async deleteUser(email) {

        return await this.connection.deleteOne({ email });
    }
};

module.exports = new userModel();