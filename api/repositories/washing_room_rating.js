
const WashingRoomRating = require('../models/washing_room_rating');
let _ = require('lodash');
module.exports = {
	insert: async function(device_id,ratings){
		const WashingRoomPanel = require('../repositories/washing_room_panel');
		return await WashingRoomPanel.getByID(device_id).then((device) => {
      			if(device){
      				console.log(device.toJSON());
      				_.each(ratings)
      			}
			    return false;
    		}).catch((error) => {
		      	console.error(error.message);
		      	console.error(error.stack);
		      	console.error('Exit.');
		      	return reply({ result: 'Device not registered or facing some issue in it.' }).code(404);
		    });
	}
}