const dbPool = require('../config/database')

const getAllUser = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (first_name, middle_name, last_name, email, password) 
        VALUES (
            '${body.first_name}', 
            '${body.middle_name}', 
            '${body.last_name}', 
            '${body.email}', 
            '${body.password}')`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users 
        SET 
            first_name='${body.first_name}',
            middle_name= '${body.middle_name}',
            last_name= '${body.last_name}',
            email='${body.email}',
            password='${body.password}'
        WHERE
            id_user=${idUser}`;

    return dbPool.execute(SQLQuery);
}
const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id_user=${idUser}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}