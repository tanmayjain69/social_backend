const db = require('../../model/posts');
const config = require('../../config/auth.config');

const User = db.userpost;
const Sequelize = require('sequelize');
exports.insert = async (req, res) => {
  // Save User to Database
  await User.create({
    username: req.body.username,
    post_id: req.body.post_id,
    title: req.body.title,
    description: req.body.description,
  });
  res.send({ message: 'Post Created successfully!' });
};
exports.update = async (req, res) => {
  // Save User to Database
  let username = req.body.username;
  let post_id = req.body.post_id;
  let cond = {};
  let unlike = req.body.unlike ? req.body.unlike : '';
  let like = req.body.like ? req.body.like : '';
  let comment = req.body.comment ? req.body.comment : '';
  if (comment) {
    cond.comments = Sequelize.fn('array_append', Sequelize.col('comments'), comment);
  }
  if (unlike) {
    cond.likes = Sequelize.literal('likes - 1');
  }
  if (like) {
    cond.likes = Sequelize.literal('likes + 1');
  }

  await User.update(cond, { where: Sequelize.and({ username }, { post_id }) });
  res.send({ message: 'User updated successfully!' });
};
exports.delete = async (req, res) => {
  let username = req.body.username;
  let post_id = req.body.post_id;
  await User.destroy({
    where: Sequelize.and({ username }, { post_id }),
  });
  res.send({ message: 'Post deleted successfully!' });
};
exports.getAll = async (req, res) => {
  let username = req.query.username;
  let result = await User.findAll({ where: { username } });

  res.send({ data: result });
};

exports.getByid = async (req, res) => {
  let username = req.query.username;
  let post_id = req.body.post_id;
  let result = await User.findAll({ where: Sequelize.and({ username }, { post_id }) });

  res.send({ data: result });
};
