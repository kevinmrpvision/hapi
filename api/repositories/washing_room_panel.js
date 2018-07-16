
const WashingRoomPanel = require('../models/washing_room_panel');

module.exports = {
	check: async function(device_id){
		return await this.getByID(device_id).then((panel) => {
			if(panel){
				return true;
			}else{
				return false;
			}
			
		}).catch((error) => {
      		console.error(error.message);
     		 console.error(error.stack);
      		console.error('Exit.');
      		return false;
    	});
	},
	getByID: async function(device_id){
		let panel = await WashingRoomPanel.select('*').where({'panel_unique_id':device_id,'status':'ACTIVE'}).first();
  		return panel;
	}
}