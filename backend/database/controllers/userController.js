const db = require('../models');
const bcryptjs = require('bcrypt');
const { generateToken } = require('../utilities');


const getUserList = async (req, res) => {
    const userList = await db.User.findAll({});
    res.status(200).send(userList);
};


const registerUser = async (req, res) => {
    const { username, password, name } = req.body;
    const targetUser = await db.User.findOne({ where: { username: username } });
    if (targetUser) {
        res.status(400).send({ message: 'Username already taken.' });
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        const createdUser = await db.User.create({
            username: username,
            password: hashedPassword,
            name: name,
            isAdmin: false
        });
        
        res.status(201).send({
            user_id: createdUser.user_id,
            name: createdUser.name,
            username: createdUser.username,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser),
        });
    }
};




const signinUser = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username: username } });
    if (targetUser) {
        if (bcryptjs.compareSync(password, targetUser.password)) {
            res.send({
                id: targetUser.id,
                name: targetUser.name,
                email: targetUser.email,
                isAdmin: targetUser.isAdmin,
                token: generateToken(targetUser),
            });
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' });
}

 const getUserProfile = async (req, res) => {
    const user = await db.User.findByPk(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  };


  const updateProfile = async (req, res) => {
    const user = await db.User.findByPk(req.body.userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.username = req.body.username || user.username;
      if (req.body.password) {
        user.password = bcryptjs.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        id: updatedUser.id,
        name: updatedUser.name,
        username: updatedUser.username,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  };

module.exports = {
    registerUser,
    getUserList,
    signinUser,
    getUserProfile,
    updateProfile
}