
const User = require('../models/user');

module.exports = {
	getAll: async function(){
		let users = await User.select('*').limit(100).get();
  		return users.toJSON();
	},
	getByID: async function(id){
		let user = await User.select('*').where('id',id).first();
  		return user.toJSON();
	}
}