const controller = require('../controllers/auth/auth.controller');
const controller_pro = require('../controllers/user/user.controller');
const { authJwt } = require('../middleware');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post('/api/user/follow', [authJwt.verifyToken], controller_pro.update);
  app.post('/api/user/unfollow', [authJwt.verifyToken], controller_pro.update);
  app.get('/api/user/getPro', [authJwt.verifyToken], controller_pro.getPro);
};
