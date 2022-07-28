// script - node ./src/sample.joi.js

import Joi from 'joi';
import { UserModel, UserBaseJoi } from './models/_.loader.js';

const joiSchema = Joi.object({
    username : UserBaseJoi.username.required(), // min 1 max 10
    password : UserBaseJoi.password.required()  // min 1 max 10
});

const successCase = async () => {

    console.log('');
    
    const username = 'hello';
    const password = 'bangabanga';

    console.log(`Success Case - username : ${username}, password: ${password}`);

    try {
        
        const result = await joiSchema.validateAsync({ username, password })

        console.log(result);

    } catch(err) {

        console.log(err.name, err.message);

    }

};

const failCaseA = async () => {

    console.log('');
    
    const username = 'hello';
    const password = 'bangabanga__';

    console.log(`Failure Case A - username : ${username}, password: ${password}`);

    try {
        
        const result = await joiSchema.validateAsync({ username, password })

        console.log(result);

    } catch(err) {

        console.log(err.name, err.message);

    }

}

const failCaseB = async () => {

    console.log('');
    
    const username = 'hellobanga__';
    const password = 'bangabanga';

    console.log(`Failure Case B - username : ${username}, password: ${password}`);

    try {
        
        const result = await joiSchema.validateAsync({ username, password })

        console.log(result);

    } catch(err) {

        console.log(err.name, err.message);

    }

}

const failCaseC = async () => {

    console.log('');
    
    const username = 'hellobanga__';
    const password = 'bangabanga__';

    console.log(`Failure Case C - username : ${username}, password: ${password}`);

    try {
        
        const result = await joiSchema.validateAsync({ username, password })

        console.log(result);

    } catch(err) {

        console.log(err.name, err.message);

    }

    console.log('');

}

await successCase();
await failCaseA();
await failCaseB();
await failCaseC();


/* 
 * Conclusion
 *
 * - Basically, JoiSchema is used to validate your params.
 * 
 * > https://github.com/Boiler-Express/Joi-Tutorial/blob/main/docs/sample.joi.md
 */