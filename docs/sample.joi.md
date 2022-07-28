## Conclusion

- `joiSchema` contain validate functions to check type & value.

`Case List`

1. Case A, official code
2. Case B, my think

<hr>

### Case A

- This `Case A` is ...
    - More `strict`
    - More `basic sample`, i think.

```javascript
const joiSchema = Joi.object({
    username: Joi.string().min(1).max(10).required(),
    password: Joi.string().min(1).max(10).required()
});

await joiSchema.validateAsync({
    username: 'username',
    passowrd: 'passowrd'
});
```

<Hr>

### Case B

- This `Case B` is ...
    - More `flexible`, i think.

```javascript
const joiSample = {
    username: Joi.string().min(1).max(10),
    password: Joi.string().min(1).max(10)
}
const joiSchema = Joi.object({
   username: joiSample.username.required(),
   password: joiSample.password.required() 
});

await joiSchema.validateAsync({
    username: 'username',
    passowrd: 'passowrd'
});
```