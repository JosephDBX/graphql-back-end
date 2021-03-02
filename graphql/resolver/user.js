const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { userMerge } = require('./merge');

const User = require('../../model/user');

module.exports = {
    user: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return userMerge.getUser(_id);
    },
    users: ({ }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return User.find().then(users => {
            return users.map(user => {
                return userMerge.transformUser(user);
            })
        })
    },
    login: ({ user_name, password }) => {
        let stored;
        return User.findOne({ user_name: user_name }).populate('roles').then(storedUser => {
            if (!storedUser) throw new Error('User does not exist!');
            stored = storedUser;
            return bcrypt.compare(password, storedUser.password);
        }).then(isEqual => {
            if (!isEqual) throw new Error('Password is incorrect!');
            return {
                userId: stored.id,
                token: jwt.sign({
                    _id: stored.id,
                    roles: stored.roles.map(rol => {
                        return {
                            _id: rol.id,
                            name: rol.name
                        }
                    })
                }, process.env.SECRET_KEY, {
                        expiresIn: '12h'
                    }),
                tokenExpiration: 12
            }
        }).catch(err => {
            throw err;
        })
    },
    createUser: ({ userInput }, req) => {
        //if (!req.isAuth) throw new Error('Unauthenticated!');
        return User.findOne({ $or: [{ user_name: userInput.user_name }, { ind: userInput.ind }] }).then(user => {
            if (user) throw new Error('User exists already.');
            return bcrypt.hash(userInput.password, 12);
        }).then(hashedPassword => {
            let user = new User({
                ...userInput,
                password: hashedPassword
            });
            return user.save();
        }).then(result => {
            return userMerge.transformUser(result);
        }).catch(err => {
            throw err;
        })
    },
    updateUser: ({ userUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return User.findById(userUpdate._id).then(user => {
            if (!user) throw new Error('User not found.');
            user = {
                ...user,
                ...userUpdate
            }
            return user.save();
        }).then(user => {
            return userMerge.transformUser(user);
        }).catch(err => {
            throw err;
        })
    },
    updateIND: ({ userId, ind }) => {
        throw new Error('Not implemented.');
    },
    updateUserName: ({ userId, user_name }) => {
        throw new Error('Not implemented.');
    },
    updatePassword: ({ passwordInput }) => {
        throw new Error('Not implemented.');
    },
    addRolToUser: ({ userId, rolID }) => {
        throw new Error('Not implemented.');
    }
}
