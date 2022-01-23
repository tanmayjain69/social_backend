const controller_post = require('../controllers/posts/posts.controller');
const { authJwt } = require('../middleware');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post('/api/posts/insert', [authJwt.verifyToken], controller_post.insert);
  app.delete('/api/posts/delete', [authJwt.verifyToken], controller_post.delete);
  app.post('/api/posts/like', [authJwt.verifyToken], controller_post.update);
  app.post('/api/posts/unlike', [authJwt.verifyToken], controller_post.update);
  app.post('/api/posts/comment', [authJwt.verifyToken], controller_post.update);
  app.get('/api/posts/get', [authJwt.verifyToken], controller_post.getByid);
  app.get('/api/posts/getAll', [authJwt.verifyToken], controller_post.getAll);
};
