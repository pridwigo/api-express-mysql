const UserModel = require('../models/userModels');


const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUser();
        res.json({
            message: 'GET all users berhasil',
            data: data
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new users berhasil',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const { idUser } = req.params;
    console.log('idUser : ', idUser);
    res.json({
        message: 'UPDATE user berhasil'
    })
}

const deleteUser = (req, res) => {
    const { idUser } = req.params;
    res.json({
        message: "DELETE user berhasil",
        data: {
            id: idUser,
            first_name: "Primantoro",
            Last_name: "Dwi Yogo",
            email: "primantoroo@outlook.com",
            password: "dwi123"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}