
const WashingRoomRating = require('../repositories/washing_room_rating');

module.exports.insert = {
  handler: function (request, reply) {
    if(typeof request.headers['device_id'] == 'undefined' || request.payload == null){
      return reply({ result: "Device ID or payload is missing."}).code(400);
    }
    
    let device_id = request.headers['device_id'];
    let ratings = request.payload;
    WashingRoomRating.insert(device_id,ratings).then((status) => {
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

