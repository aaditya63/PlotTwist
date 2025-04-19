const { getToken, verifyToken } = require("../config/jwt")
const User = require("../models/user");
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = getToken(user);
        res.cookie('jwt', token);
        const userObj = user.toObject(); // converts to plain object
        delete userObj.password;
        res.status(200).json({ message: 'Login successful', user: userObj });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.signup = async (req, res) => {
    const { name, email, password, photo } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
            photo: photo,
            followers: [],
            following: [],
            story: [],
            likedStory: []
        })
        await user.save()
        console.log("Data Saved!");

        res.json({
            success: true,
            message: "User Created Successfully!"
        })
    } catch (error) {
        console.log("Error Occured");
        console.log(error)
        res.json({
            success: false,
            message: "User Not Created"
        })
    }
}

exports.checkAuth = async (req, res) => {

    const token = req.cookies?.['jwt'];
    if (!token) {
        return res.json({
            message: "user not Logged in",
            success: false
        })
    }
    const payload = verifyToken(token);
    const email = payload.email;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                error: 'Something Went Wrong',
                success: false,
            });
        }
        const userObj = user.toObject();
        delete userObj.password;
        res.status(200).json({
            message: 'Login successful', user: userObj,
            success: true
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.logout= async (req,res) => {
    const token = req.cookies?.['jwt'];
    if (!token) {
        return res.json({
            message: "user already logout",
            success: true
        })
    }
    try{
        res.clearCookie('jwt');
        return res.json({
            message: "user already logout",
            success: true
        })
    }catch{
        return res.json({
            message: "user not logged out",
            success: false
        })
    }
}