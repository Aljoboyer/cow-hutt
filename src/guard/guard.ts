const jwt = require('jsonwebtoken');

function jwtChecker(req: any, res: any, next: any) {
//   console.log('Hitted authenticateToken', req)
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  jwt.verify(token, "CowHuttSecret", (err: any, decoded: any) => {
    req.user = decoded;
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    else{
        // console.log('User', req.user)
    }
    // req.user = user;
    next();
  });
}

export {
  jwtChecker,
};
