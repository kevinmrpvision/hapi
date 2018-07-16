
const WashingRoomPanel = require('../repositories/washing_room_panel');

module.exports.check = {
  handler: function (request, reply) {
    if(typeof request.headers['device_id'] == 'undefined'){
      return reply({ result: "Device ID required in header."}).code(400);
    }
    
    let device_id = request.headers['device_id'];
    WashingRoomPanel.check(device_id).then((status) => {
      if(status){
        return reply({ result: true}).code(200);
      }
      console.log(status);
      return reply({ result: false }).code(406);
    }).catch((error) => {
      console.error(error.message);
      console.error(error.stack);
      console.error('Exit.');
      return reply({ result: 'Device not registered or facing some issue in it.' }).code(404);
    });
  }
};

