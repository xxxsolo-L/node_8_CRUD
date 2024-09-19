import sequelize from './config/db.js';
import User from './models/user.js';

async function updateUser() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Обновление данных пользователя
        const [updatedRowsCount] = await User.update(
            { name: 'Alice Smith' },  // Новое значение имени
            { where: { email: 'sosendrop123@xmail.com' } }  // Условие поиска по email
        );

        if (updatedRowsCount > 0) {
            console.log('User updated successfully.');
        } else {
            console.log('No user found with the specified email.');
        }

        // Проверка обновленных данных
        const updatedUser = await User.findOne({ where: { email: 'sosendrop123@xmail.com' } });
        console.log('Updated user:', updatedUser ? updatedUser.toJSON() : 'User not found');
    } catch (error) {
        console.error('Error updating user:', error);
    } finally {
        await sequelize.close();
    }
}

updateUser();
