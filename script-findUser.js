import sequelize from './config/db.js';
import User from './models/user.js';

async function readUsers() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Поиск одного пользователя по email
        const userByEmail = await User.findOne({ where: { email: 'kitecat@xmail.com' } });
        console.log('User found by email:', userByEmail ? userByEmail.toJSON() : 'User not found');

        // Получение всех пользователей
        const allUsers = await User.findAll();
        console.log('All users:', allUsers.map(user => user.toJSON()));
    } catch (error) {
        console.error('Error reading users:', error);
    } finally {
        await sequelize.close();
    }
}

readUsers();
