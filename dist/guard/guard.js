"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtChecker = void 0;
const jwt = require('jsonwebtoken');
function jwtChecker(req, res, next) {
    //   console.log('Hitted authenticateToken', req)
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ error: 'Missing token' });
    }
    jwt.verify(token, "CowHuttSecret", (err, decoded) => {
        req.user = decoded;
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        else {
            // console.log('User', req.user)
        }
        // req.user = user;
        next();
    });
}
exports.jwtChecker = jwtChecker;
//# sourceMappingURL=guard.js.map