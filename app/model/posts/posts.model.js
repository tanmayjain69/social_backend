module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('posts', {
    username: {
      type: Sequelize.STRING,
    },
    post_id: {
      type: Sequelize.STRING,
    },
    likes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    comments: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Post;
};
