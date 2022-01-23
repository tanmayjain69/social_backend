const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './app/routes/auth.routes.js',
  './app/routes/userpro.routes.js',
  './app/routes/posts.routes.js',
];
const doc = {
  info: {
    version: '1.0.0', // by default: '1.0.0'
    title: 'backend assignment', // by default: 'REST API'
    description: '', // by default: ''
  },
  host: 'https://social-backend-84.herokuapp.com', // by default: 'localhost:3000'
  basePath: '/', // by default: '/'
  schemes: [], // by default: ['http']
  consumes: [], // by default: ['application/json']
  produces: [], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: '', // Tag name
      description: '', // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {}, // by default: empty object (Swagger 2.0)
  definitions: {}, // by default: empty object
  components: {}, // by default: empty object (OpenAPI 3.x)
};

swaggerAutogen(outputFile, endpointsFiles, doc);
// swaggerAutogen(outputFile, endpointsFiles).then(() => {
//   require('./index.js');
// });
