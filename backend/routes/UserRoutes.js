const express = require('express');
const router = express.Router();
const User = require('./../models/UserSchema');
const { generateToken } = require('./../jwt');

router.post('/signup', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const userEmail = await User.findOne(newUser.email)
        if(userEmail){
            res.status(400).json({error:"Email Already exist"});
        }
        //hame newUser ke saath saath unsc bhi banana hai..
        const count = await User.countDocuments();
        const uuid = `UNSC${newUser.batch.slice(2,4)}${String(count + 1).padStart(3,'0')}`;
        newUser.uuid = uuid; 
        const response = await newUser.save();
        const token = generateToken({ id: response.id });
        
        res.status(200).json({ response, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase().trim() });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        
        const token = generateToken({ id: user.id });
        res.status(200).json({ token, message: "Login successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});