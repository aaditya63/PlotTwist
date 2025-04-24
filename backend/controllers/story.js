const { verifyToken } = require("../config/jwt");
const Story = require("../models/story");
const User = require("../models/user");

exports.uploadStory = async (req, res) => {
    const { title, description, photo, audio } = req.body;
    try {
        const token = req.cookies?.['jwt'];
        if (!token) {
            return res.json({
                message: "user not Logged in",
                success: false
            })
        }
        const payload = verifyToken(token);
        const email = payload.email;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(500).json({
                error: 'Something Went Wrong',
                success: false,
            });
        }
        const id = user._id;
        const story = new Story({
            title: title,
            photo:photo,
            ownBy:id,
            description: description,
            audio: audio,
            likes:[]
        })
        await story.save()
        
        return res.status(200).json({
            success:true,
            story : story  
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            msg:"Error Occured "
        })
    }
}
