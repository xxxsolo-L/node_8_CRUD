import sequelize from './config/db.js';
import User from './models/user.js';

async function deleteUser() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Удаление пользователя по email
        const deletedRowsCount = await User.destroy({ where: { email: 'dozdroperma007@xmail.com' } });

        if (deletedRowsCount > 0) {
            console.log('User deleted successfully.');
        } else {
            console.log('No user found with the specified email.');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    } finally {
        await sequelize.close();
    }
}

deleteUser();
