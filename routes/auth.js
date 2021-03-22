const router = require('express').Router();
const User = require('../model/User');
const { registerValidation } = require('../validation')

router.post('/register', async (req,res)=>{
    // Validation Applied Below
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    //Check if the User is already in the Database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('User Already Exists');
    // Create a New User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err){
        res.status(400).send(err);
       // console.log(err);
       // console.log("Error is Coming ! xD")
    }
});

module.exports = router;