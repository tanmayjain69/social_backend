const controller = require('../controllers/auth/auth.controller');
const controller_pro = require('../controllers/user/user.controller');
const { authJwt } = require('../middleware');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post(
    '/api/user/follow',
    [authJwt.verifyToken],
    controller_pro.update
    /*    #swagger.tags = ['USER']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user profile',
                required: true,
                schema: {
                    $username: "string",
                    $followers: "string|username of follower",
                }
        }, */
  );
  app.post(
    '/api/user/unfollow',
    [authJwt.verifyToken],
    controller_pro.update
    /*    #swagger.tags = ['USER']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user profile',
                required: true,
                schema: {
                    $username: "string",
                    $followers: "string|username of follower",
                }
        }, */
  );
  app.get(
    '/api/user/getPro',
    [authJwt.verifyToken],
    controller_pro.getPro
    /*    
  #swagger.tags = ['USER']
  #swagger.description = 'routes for user profile'
    #swagger.parameters['username'] = { description: 'string' }
       
    */
  );
};
