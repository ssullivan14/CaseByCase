const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
	// Get token from the header
	const token = req.header('x-auth-token');

	// Check if token does not exist
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    
    // Verify token
    try {
        // Decode token using jsonwebtoken verify, set user
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
