const Defaults = require('./controllers/defaults');
const User = require('./controllers/users');
const WashingRoomPanel = require('./controllers/washing_room_panel');
const WashingRoomRating = require('./controllers/washing_room_rating');

exports.register = (plugin, options, next) => {

  plugin.route([
    { method: 'GET', path: '/', config: Defaults.hello },
    { method: 'GET', path: '/restricted', config: Defaults.restricted },
    { method: 'GET', path: '/{path*}', config: Defaults.notFound },
    { method: 'GET', path: '/user/{id}', config: User.user },
    { method: 'GET', path: '/users', config: User.users },
    { method: 'GET', path: '/washing-room-panel', config: WashingRoomPanel.check },
    { method: 'POST', path: '/washing-room-rating', config: WashingRoomRating.insert },
  ]);

  next();
};

exports.register.attributes = {
  name: 'api'
};