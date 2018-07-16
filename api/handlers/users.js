
let users = [{id:1,name:'kevin'},{id:2,name:'Kishor'}];
const User = require('../models/user');
async function getUsers() {
  let usersp = await User.select('*').limit(100).get();
  return usersp.toJSON();
}
var _ = require('lodash');
module.exports.users = {
  handler: function (request, reply) {
    
    getUsers().then((users) => {
      console.log('Done.');
      console.log(users);
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
    var user = _.find(users, { 'id': id});
    if(user)
      return reply({ result:user});
    else
      return reply({ result: 'User not found!' }).code(404);
  }
};

module.exports.adduser = {
  handler: function (request, reply) {
    return reply({ result: 'User added successfully!' }).code(404);
  }
};