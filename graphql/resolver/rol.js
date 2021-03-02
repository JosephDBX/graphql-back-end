const { rolMerge } = require('./merge');

const Rol = require('../../model/rol');

module.exports = {
    rol: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return rolMerge.getRol(_id);
    },
    roles: ({ paginateInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Rol.find().then(roles => {
            return roles.map(rol => {
                return rolMerge.transformRol(rol);
            })
        })
    },
    createRol: ({ rolInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Rol.findOne({ name: rolInput.name }).then(rol => {
            if (rol) throw new Error('Rol exists already.');
            let newRol = new Rol({
                ...rolInput
            });
            return newRol.save();
        }).then(rol => {
            return rolMerge.transformRol(rol);
        }).catch(err => {
            throw err;
        })
    },
    updateRol: ({ rolUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Rol.findById({ name: rolUpdate._id }).then(rol => {
            if (!rol) throw new Error('Rol does not exist.');
            return Rol.find({ name: rolUpdate.name });
        }).then(rol => {
            if (rol) throw new Error('Rol exists already.');
            rol = {
                ...rol,
                ...rolUpdate
            }
            return rol.save();
        }).then(rol => {
            return rolMerge.transformRol(rol);
        }).catch(err => {
            throw err;
        })
    }
}
