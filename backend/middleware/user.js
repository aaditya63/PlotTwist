const { verifyToken } = require("../config/jwt")

//check if the user is logged in or not
exports.verifyAuth = async (req, res) => {
    const token = req.cookies?.['jwt'];
    if (!token) {
        return res.json({
            message: "user not Logged in",
            success: false
        })
    }
    try {
        const payload = verifyToken(token);
        const email = payload.email;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(500).json({
                error: 'Something Went Wrong',
                success: false,
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            error: 'Internal Server Error',
            success: false
        });
    }
}