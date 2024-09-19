import User from './models/user.js';
import Post from './models/post.js';

async function createPostForUser(userId){
    try {
        const user = await User.findByPk(userId);

        if(!user) {
            console.log('User not found!');
            return;
        }

        const newPost = await Post.create({
            title: 'My third Post',
            content: 'This is the content of my first post.',
            userId: userId,
        });

        console.log('Post created:', newPost.toJSON());
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

createPostForUser(1);