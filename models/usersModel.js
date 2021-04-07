'use strict';
const db = require('./conn'), 
    bcrypt = require('bcryptjs');

    class Users {
        constructor(id, provider, first_name, last_name, email, username, password) {
            this.id = id;
            this.provider = provider;
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.username = username;
            this.password = password;
        }
    
        static async getUsersList() {
            const response = await db.any(`SELECT * FROM users;`);
            return response;
        }

        static async addUser(provider, first_name, last_name, email, username, password) {
            try {
                console.log('attempting to add user');
                const query = `INSERT INTO users (provider, first_name, last_name, email, username, password) VALUES ('${provider}','${first_name}', '${last_name}', '${email}', '${username}', '${password}') RETURNING id;`;
                const response = await db.one(query);
                return response;
            } catch (error) {
                return error.message;
            }
        }

        
    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login() {
        try {
            const query = `SELECT * FROM users WHERE username = '${this.username}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);
            

            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, id: id, first_name, last_name };
            } else {
                return { isValid }
            }
        } catch (error) {
            return error.message;
        }
    }
}
module.exports = Users;
