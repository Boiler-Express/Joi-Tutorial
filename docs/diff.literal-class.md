## Conclusion

- If you can use class to be used for Paramteres.
- Your interaction, between function and function, is more stable and readable.

- After then, if you can use TypeScript, class parameter is more comfortable to co-work.

### ❌ Use primitive type.

```javascript
const sayUserProfile = (username, password) => {
   console.log(username, password);
};

const startLogic = () => {
    const username = 'Boiler-Express';
    const password = 'Boiler-Password';
    
    sayUserProfile(username, password);
}
```

### ❌ Use references type

```javascript
const sayUserProfile = (user) => {
   console.log(user); 
};

const startLogic = () => {

    const username = 'Boiler-Express';
    const password = 'Boiler-Password';

    const userObject = {
        username,
        password
    };
    
    sayUserProfile(userObject);

}
```

### ⭕ User class

```javascript
const sayUserProfile = (userModel) => {
   console.log(userModel); 
};

const startLogic = () => {

    const username = 'Boiler-Express';
    const password = 'Boiler-Password';

    const userModel = new UserModel(username, password);
    
    sayUserProfile(userModel);

}
```