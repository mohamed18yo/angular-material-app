var express = require("express");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("../model/user");
/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.post("/signup", (req, res) => {
  User.findOne({email: req.body.email}).then(user=>{
      if(!user){
        var password = req.body.password;

        bcrypt.hash(password, 10).then((hash) => {
          const user = new User({
            email: req.body.email,
            password: hash,
          });
          user
            .save()
            .then((user) => {
              // console.log(result);
              res.status(201).json({user:user});
            })
            .catch((err) => {
              res.status(500).json(err);
            });
        });
      }else{
        res.status(401).json({message: 'user already exist!'})
      }
  })

});

router.post("/login", (req, res) => {
  let userFetch;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(500).json({ message: "user not found!" });
      }
      userFetch = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
       return res.status(401).json({message:"Ivaled Password"});
      }
      const token = jwt.sign(
        { email: userFetch.email, userId: userFetch._id },
        "..JWT_KEY",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token: token, expiresIn: 3600 });

      // console.log("token is: " + token);
    })
    .catch((err) => {
      console.log("error message: " + err);
     return res.status(401).json("Auth Fiald");
    });
});

module.exports = router;
