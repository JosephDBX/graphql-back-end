const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    const auhtHeader = req.get('Authorization');
    if (!auhtHeader) {
        req.isAuth = false;
        return next();
    }
    const token = auhtHeader.split(' ')[1];
    if (!token || token === '') {
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req._id = decodedToken._id;
    req.roles = decodedToken.roles;
    next();
}

exports.isAuth = isAuth;
