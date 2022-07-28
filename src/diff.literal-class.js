// script - node ./src/diff.literal-class.js

import { UserModel } from './models/_.loader.js';

const username = 'hello';
const password = 'banga-banga';

const userLiteral = { username, password };
const userModel = new UserModel(username, password);

console.log(userLiteral);                       // This is Object.
console.log(userLiteral instanceof Object)      // true
console.log(userLiteral instanceof UserModel)   // false

console.log(userModel);                     // This is UserModel and Object.\
console.log(userModel instanceof Object)    // true
console.log(userModel instanceof UserModel) // true


/* 
 * Conclusion
 * 
 * - Basically, class is more stable and readable for dev, in js.
 * - And then, class is more comfortable for dev, in ts.
 * 
 * > https://github.com/Boiler-Express/Joi-Tutorial/blob/main/docs/diff.literal-class.md
 */