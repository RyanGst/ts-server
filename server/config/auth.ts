
import jwt = require("jsonwebtoken");

import Config from '../config/configs';

class Auth {

    constructor() { }

    validate(req, res, next) {

        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, Config.secret, function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Error when authenticating the token!' });
                } else {
                    console.log('OK')
                    next();
                }
            });
        } else {
            console.log('403 - forbidden')
            return res.status(403).send({
                success: false,
                message: '403 - Forbidden'
            });
        }
    }

    async create(req, res, user) {
        const token = await jwt.sign({ username: user.username, userId: user._id }, 'secret', { expiresIn: '10h' })

        return res.json({ success: true, message: 'Auth success', token: token })
    }
}

export default new Auth;