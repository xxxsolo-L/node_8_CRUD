'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserPosts', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Ссылка на таблицу Users
          key: 'id', // Ссылка на поле id в таблице Users
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts', // Ссылка на таблицу Posts
          key: 'id', // Ссылка на поле id в таблице Posts
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('UserPosts');
  },
};

// Промежуточная таблица `UserPosts`: Эта таблица содержит два внешних ключа — `userId` и `postId`, которые ссылаются на `Users` и `Posts`, соответственно.
// `onUpdate: 'CASCADE'` и `onDelete: 'CASCADE'`: Эти параметры означают, что если запись в таблицах `Users` или `Posts` будет обновлена или удалена, изменения каскадно применятся к связанным записям в таблице `UserPosts`.
