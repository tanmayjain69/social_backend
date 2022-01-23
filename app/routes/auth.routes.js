const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth/auth.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post(
    '/api/auth/signup',
    [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
    controller.signup
    /*    
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user auth',
                required: true,
                schema: {
                    $username: "string",
                    $email: "string",
                    $password: "string",
                }
        }, */
  );

  app.post(
    '/api/auth/signin',
    controller.signin
    /*    #swagger.tags = ['AUTH']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user auth return authentication token',
                required: true,
                schema: {
                    $username: "string",
                    $password: "string"
                }
        }, */
  );
};
