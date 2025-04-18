const jwt = require('jsonwebtoken')
exports.getToken = (user)=>{
    try{
        const {name,email} = user
        const token = jwt.sign({
            name:name,email:email
        },process.env.JWT_KEY)
        return token;
    }catch(error){
        console.log(error)
        return null
    }
}

//Used for verification if not verified then return null otherwise return payload
exports.verifyToken = (token)=>{
    try{
        const payload = jwt.verify(token,process.env.JWT_KEY)
        return payload;
    }catch(error){
        return null;
    }
}