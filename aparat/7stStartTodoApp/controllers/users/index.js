const _ = require('lodash');
const bycrypt = require('bcryptjs');
const usersRepo = require('../../dal/users.repo');
const result  = require('lodash');
const { isMatch } = require('lodash');

const controller = {
    login: (req , res) => {
        const credentials = _.pick(req.body , ['username' , 'password']);

        usersRepo.findByUsername(credentials.username , (err , user) => {
            if(err) {
                res.status(500).send(err);
            }
            else if(!user) {
                res.status(404).send({msg: 'این نامه کاربری ثبت نشده است'});
            } else {
                bycrypt.compare(credentials.password , user.password).then(isMatch => {
                    if(isMatch) {
                        delete user.password;
                        res.send(user);
                    } else {
                        res.status(400).send({msg: ' کلمه عبور اشتباه است'});
                    }
                }).catch(err => {
                    res.status(500).send(err);
                })
            }          
        })

    },
    register: (req , res ) => {
        const credentials = _.pick(req.body , ['username' , 'password']);
        credentials.username = credentials.username.toLowerCase();
        // check user exists
        usersRepo.findByUsername(credentials.username, (err , user) => {
            if(err) res.status(500).send(err);
            else if(user) res.status(400).send({msg: 'این نام کاربری قبلا ثبت شده است'});
            else {
                // generate salt
                const salt = bycrypt.genSaltSync(10);
                // hash the password
                bycrypt.hash(credentials.password , salt ).then(hashedPassword => {
                    // save the user
                    usersRepo.create({username: credentials.username , password: hashedPassword} , (err , result) => {
                        if(err) res.status(500).send(err);
                        else {
                            usersRepo.findByUsername(credentials.username , (err , user)=> {
                                if(err) res.status(500).send(err);
                                else {
                                    delete user.password;
                                    res.send(user);
                                }
                            })
                        }
                    })
                }).catch(err => {
                    res.status(500).send(err);
                });

            }
        })

    }
}

module.exports = controller;