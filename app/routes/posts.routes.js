const controller_post = require('../controllers/posts/posts.controller');
const { authJwt } = require('../middleware');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post(
    '/api/posts/insert',
    [authJwt.verifyToken],
    controller_post.insert
    /*    #swagger.tags = ['POSTS']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user posts',
                required: true,
                schema: {
                    $username: "string",
                    $title: "string",
                    $discription: "string",
                    $post_id: "string",
                }
        }, */
  );
  app.delete(
    '/api/posts/delete',
    [authJwt.verifyToken],
    controller_post.delete
    /*    #swagger.tags = ['POSTS']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user posts',
                required: true,
                schema: {
                    $username: "string",
                    $post_id: "boolean",
                }
        }, */
  );
  app.post(
    '/api/posts/like',
    [authJwt.verifyToken],
    controller_post.update
    /*    #swagger.tags = ['POSTS']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user posts',
                required: true,
                schema: {
                    $username: "string",
                    $like: "boolean",
                    $post_id: "string",
                }
        }, */
  );
  app.post(
    '/api/posts/unlike',
    [authJwt.verifyToken],
    controller_post.update
    /*    #swagger.tags = ['POSTS']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user posts',
                required: true,
                schema: {
                    $username: "string",
                    $unlike: "boolean",
                    $post_id: "string",
                }
        }, */
  );
  app.post(
    '/api/posts/comment',
    [authJwt.verifyToken],
    controller_post.update
    /*    #swagger.tags = ['POSTS']
        #swagger.parameters['params'] = {
                in: 'body',
                description: 'routes for user posts',
                required: true,
                schema: {
                    $username: "string",
                    $post_id: "string",
                    $comment: "string",
                }
        }, */
  );
  app.get(
    '/api/posts/get',
    [authJwt.verifyToken],
    controller_post.getByid
    /*    
  #swagger.tags = ['POSTS']
  #swagger.description = 'routes for user posts'
    #swagger.parameters['username'] = { description: 'string' }
    #swagger.parameters['post_id'] = { description: 'string' }
       
    */
  );
  app.get(
    '/api/posts/getAll',
    [authJwt.verifyToken],
    controller_post.getAll
    /*    
  #swagger.tags = ['POSTS']
  #swagger.description = 'routes for user posts'
    #swagger.parameters['username'] = { description: 'string' }
       
    */
  );
};
