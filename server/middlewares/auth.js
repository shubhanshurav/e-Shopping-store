// auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

// Authentication =>  for checking the user is authenticated or not
exports.auth = (req, res, next) => {
    try{
       // Extract JWT token -> from body, cookies, header -> in teeno me se ham token ko find kar sakte hai
       console.log("cookie", req.cookies.token);
       console.log("body", req.body.token);
       console.log("header", req.header("Authorization"));

       const token = req.cookies.token || req.body.token ||req.header("Authorization").replace("Bearer ", "");

       if(!token) {
          return res.status(401).json({
            success:true,
            message:'Token missing'
          });
       }

       // verify the token -> using verify() method
       try{ 
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;
       } catch(error){ 
            return res.status(401).json({
                success:true,
                message:'token is invalid',
            })
       }

       next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
        });
    }
}

// Authorization for student => for checking role of student is matched or not
exports.isStudent = (req, res, next) => {
    try{
       if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for students',
            });
       }

       next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'User role is not matching',
        });
    }
}

// Authorization for Admin => for checking role of admin is matched or not
exports.isAdmin = (req, res, next) => {
    try{
       if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for admin',
            });
       }

       next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'User role is not matching',
        });
    }
}