const User = require('../models/user');
const {validationResult} = require('express-validator');


//Create User
exports.addUser = async(req, res) => {
   
    const errors = validationResult(req);
    // console.log(errors); //take out later

    //Validating user info sent
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }


    async function generateUserId() {
        try {
            const lastRecord = await User.findOne({}, {}, { sort: { id: -1 } }).exec();
            if (!lastRecord) {
            return 1; // Assuming 1 is the starting user ID
            } else {
            const userCount = lastRecord.id;
            return userCount + 1;
            }
        } catch (err) {
            throw new Error('Error generating user ID: ' + err.message);
        }
        
    }

    //creating...
    const {name} = await req.body;
    try {
        const userId = await generateUserId();
        const user = new User({
            id: userId,
            name: name
        });
        await user.save();
        console.log(userId)
        const newUser = await User.findOne({ id: userId }).select('-_id id name');
        console.log(newUser);

        res.status(201).json({
            message: "user added",
            newUser
        });
    } catch (err) {
        res.status(500).json({message: err.mesage});
    }
    
};

//Read user
exports.getUser = async(req, res) =>{

    //Validating input...
    const errors = validationResult(req);
    // console.log(errors);//take out later
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    //reading...
    const id = req.body.id;
    //console.log(id); //take out later
    return User.findOne({ id: id })
        .select('-_id id name')
        .exec()
        .then(user => {
            if (!user) {
            console.log('User not found');
            return res.status(404).json({
                message: 'User not found'
            });
            }
            console.log('User found');
            res.status(200).json(user);
        })
        .catch(err => {
            console.log('Error:', err);
            res.status(500).json({
            error: err
            });
        });
    }; 
    
//Update user
exports.updateUser = async (req, res) => {

    //validating input...
    const errors = validationResult(req);
    //console.log(errors); //take out later

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    //updating...
    const id = req.body.id;
    const newName = req.body.name;
    console.log(id)
    return User.findOneAndUpdate({id: id},
        {
            name: newName
        },
        { new: true })
        .select('-_id id name')
        .then(user =>{
            if(!user){
                res.status(404).json({
                    message: "no user with inputed id"
                })
            }
            res.status(200).json({
            message: "user updated",
            user
        });
        })
        .catch(err => res.status(500).json({ message: err.message }));
};

//Delete user
exports.deleteUser = async (req, res) => {

    //validating input...
    const errors = validationResult(req);
    // console.log(errors); //comment out later

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    };

    //deleting...
    const id = req.body.id;
    console.log(id);
    return User.findOneAndDelete({ id: id })
        .select('-_id id name')
        .exec()
        .then(user => {
            if(!user) {
                res.status(404).json({
                    message: "no user with id"
                });
            };
            console.log("user deleted")
            res.status(200).json({
                message: "user deleted",
                user
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};