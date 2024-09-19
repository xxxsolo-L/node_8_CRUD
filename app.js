import express from "express";
import sequelize from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Sequelize with Express');
});

app.listen(PORT, async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error){
        console.error('Unable to connection to the database', error);
    }
});