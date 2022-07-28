
/**
 * UserModel is class to package primitive variables.
 * 
 * username. password -> { username, passowrd }
 * 
 * @public `username` String
 * @public `password` String
 */
export default class UserModel {

    username;
    password;

    constructor(username, password) {
        
        this.username = username;
        this.password = password;

    }
}