const db = require('../../model/user');
const config = require('../../config/auth.config');

const User = db.userpro;
const Sequelize = require('sequelize');
exports.update = async (req, res) => {
  // Save User to Database
  let username = req.body.username;
  let cond = {};
  let followers = req.body.followers ? req.body.followers : '';
  let following = req.body.following ? req.body.following : '';
  let unfollow = req.body.unfollow ? req.body.unfollow : '';
  let cond_foll = {};
  if (followers) {
    cond.following = Sequelize.fn('array_append', Sequelize.col('followers'), followers);
    cond_foll.followers = Sequelize.fn('array_append', Sequelize.col('followers'), followers);
  }

  if (unfollow) {
    cond.following = Sequelize.fn('array_remove', Sequelize.col('followers'), unfollow);
    cond_foll.followers = Sequelize.fn('array_remove', Sequelize.col('followers'), followers);
  }
  console.log(cond);
  await User.update(cond, { where: { username: username } });
  await User.update(cond_foll, { where: { username: followers } });
  res.send({ message: 'User updated successfully!' });
};
exports.getPro = async (req, res) => {
  let username = req.query.username;
  let result = await User.findOne({ where: { username } });
  let final = {};
  if (result) {
    final['username'] = username;
    final['followers'] = result.followers ? result.followers.length : 0;
    final['following'] = result.following ? result.following.length : 0;
  } else {
    final['msg'] = 'NO DATA';
  }
  res.send({ data: final });
};
