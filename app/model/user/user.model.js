module.exports = (sequelize, Sequelize) => {
  const UserPro = sequelize.define('user_dets', {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    followers: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
    },
    following: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
    },
    posts: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
    },
  });

  return UserPro;
};
