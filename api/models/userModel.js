'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  profilePicture: {
    type: Buffer,
    required: 'Please upload a profile picture.'
  },
  firstName: {
    type: String,
    required: 'Please enter a first name.'
  },
  lastName: {
    type: String,
    required: 'Please enter a last name.'
  },
  type: {
    type: String,
    required: 'Please enter a type.'
  },
  onLeave: {
    type: String,
    required: 'Please say whether or not this person is on leave.'
  },
  specialties: {
    type: String,
    required: 'Please enter this persons specialties.'
  },
  biography: {
    type: String,
    required: 'Please enter a biography.'
  }
});

module.exports = mongoose.model('Users', UserSchema);