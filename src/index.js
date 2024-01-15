require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const usersRoutes = require('./routes/usersRoute');
const middlewareLogRequest = require('./middleware/logRequest')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(4000, () => {
    console.log(`Server berhasil di running di port : ${PORT}`);
})