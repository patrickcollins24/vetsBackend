const db = require('.conn');

class User {
    constructor(id, first_name, last_name, email, username, password ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    static async addUser (first_name, last_name, email, username, password) {
        try {
            const query = `INSERT INTO provider_user (first_name, last_name, email, username, password) VALUES ('${first_name}','${last_name}', '${email}', '${username}', '${password}') RETURNING id`;
            const response = await db.one(query)
            return response;
        }catch (error){
            return error.message;
        }
    }
    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password,hashedPassword);
    }
    async login() {
        try {
            const query = `SELECT * FROM users WHERE username = '${this.username}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);
            if(!!isValid) {
                const { id, username } = response;
                return { isValid, user_id: id, username}
                }else {
                    return { isValid }
                }
            }catch (error) {
                return error.message;
            }
        }
        static async getUserInfo(user_id) {
            const query = `Select * from users Where id = '${user_id}';`;
            
        }
        static async userList (user_id) {
            
        }  
        }
        
    
module.exports = User;
