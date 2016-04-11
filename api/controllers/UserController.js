/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res) {
    var params = req.params.all();
    User.create({
      email: params.email
    }).exec(function createCB(err, created) {
      return res.json({
        notice: created || err
      });
    });
  }
};
