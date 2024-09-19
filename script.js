import User from './models/user.js'; // Импортируем модель User

async function createUser() {
    try{
        const newUser = await User.create({
            name: 'Alice',
            email: 'alice@example.com',
        });
        console.log('User created:', newUser.toJSON());
    } catch(error) {
        console.error('Error creating user:', error);
    }
}
createUser();