
let users = [{id:1,name:'kevin'},{id:2,name:'Kishor'}];
const User = require('../repositories/user');

var _ = require('lodash');
module.exports.users = {
  handler: function (request, reply) {
    
    User.getAll().then((users) => {
      return reply({ result: users });
      
    }).catch((error) => {
      console.error(error.message);
      console.error(error.stack);
      console.error('Exit.');
      process.exit(1);
    });
  }
};

module.exports.user = {
  // auth: 'jwt',
  handler: function (request, reply) {
    var id = parseInt(encodeURIComponent(request.params.id));
    User.getByID(id).then((user) => {
      return reply({ result: user });
      
    }).catch((error) => {
      console.error(error.message);
      console.error(error.stack);
      console.error('Exit.');
      return reply({ result: 'User not found!' }).code(404);
    });
  }
};

module.exports.adduser = {
  handler: function (request, reply) {
    return reply({ result: 'User added successfully!' }).code(404);
  }
};