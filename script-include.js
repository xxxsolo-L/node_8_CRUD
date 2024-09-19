import User from './models/user.js';
import Post from './models/post.js';

async function findUserWithPosts(userId) {
    try {
        const userWithPosts = await User.findOne({
            where: {id: userId},
            include: [{
                model: Post,
                as: 'post',
            }],
        });

        if (userWithPosts) {
            console.log('User with posts:', JSON.stringify(userWithPosts, null, 2));
        } else {
            console.log('User not found');
        }
    } catch (error) {
        console.error('Error finding user with posts:', error);
    }
}
findUserWithPosts(1);