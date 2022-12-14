const User = require('../models/userModels');


module.exports = {

    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            if (!user) {
                return res.status(400).json("User Not Found!!");
            }
            res.status(200).json({ allData: user })

        } catch (error) {
            res.status(400).send(error)
        }
    },

    async getFilteredUser(req, res) {
        try {
            const user = await User.find(req.query);
            res.status(200).json({ filterdData: user })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async getsingleUser(req, res) {
        try {
            const id = req.params.id;
            const singleUser = await User.findById(id)
            if (!singleUser) {
                return res.status(400).json("Id Not Found!!");
            }
            res.status(200).json(singleUser)

        } catch (error) {
            res.status(400).send(error)
        }
    },

    async createNewUser(req, res) {
        try {
            const data = req.body
            await User.create(data);
            res.status(200).json({ mesg: "User Added!!", newuser: data })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            await User.findByIdAndUpdate(id, data)
            res.status(200).json({ updatedUser: data })

        } catch (error) {
            res.status(400).send(error)
        }
    },

    async deleteAll(req, res) {
        try {
            await User.deleteMany();
            const deletedData = await User.find()
            if (!deletedData) {
                return res.status(400).json("User Not Found!!");
            }
            res.status(200).json({ success: true, allUser: deletedData })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async deleteSingleUser(req, res) {
        try {
            const id = req.params.id;
            const singleUser = await User.findByIdAndDelete(id)
            if (!singleUser) {
                return res.status(400).json("Id Not Found!!");
            }
            res.status(200).json({ sucess: true, deletedUser: singleUser })

        } catch (error) {
            res.status(400).send(error)
        }
    },

}