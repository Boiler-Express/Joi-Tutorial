import Joi from 'joi';

/**
 * UserBaseJoi is storage class to save Joi Options
 * 
 * @static `username` = Joi.string().min(1).max(10);
 * @static `password` = Joi.string().min(1).max(10);
 */
export default class UserBaseJoi {

    static username = Joi.string().min(1).max(10);
    static password = Joi.string().min(1).max(10);
    
}