'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  app.route('/api/users')
    .get(user.list_all_users)

  app.route('/api/users/:userId')
    .get(user.read_a_user)

  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user); 

  app.route('/users/:userId')
    .get(user.read_a_user)
    .delete(user.delete_a_user)

  app.get('/', function(req, res) {
      res.render('createUser');
  });

};
