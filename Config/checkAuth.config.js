const { User } = require("../models");
const bcrypt = require('bcrypt');
const { errorMessage } = require("../Utils/responseSender.utils");

const checkAuth = async (req,res,next) =>{
    try {
        const user = await User.find({ email : req.body.email });
        if(user.length === 0){
            errorMessage(
                res,
                "Email ID and Password DID NOT MATCH ",
            );
        }
        else{
            if(await bcrypt.compare(req.body.password , user[0].password)){
                req.user = user[0] ;
                next();
            }else{  res.redirect('/') };
        }
    } catch (error) {
        res.json({
            note : "Email ID and Password DID NOT MATCH",
        }).redirect('/')
    }
}

module.exports = checkAuth;