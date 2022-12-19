const { findOne } = require('../models/User');
const CustomError = require('../helpers/CustomError');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { email, name, password, surname, username } = req.body;
  const user = await User.create({ email, name, password, surname, username });
  res.status(200).json({
    success: true,
    data: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      id: user.id,
      password: user.password,
      username: user.username,
    },
  });
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    return next(new CustomError('Please Check Your username', 400));
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      req.session.userID= user._id
      res.status(200).json({
        status: 'success',
        data: {
          password: user.password,
          username: user.username,
          watched_movies:user.watched_movies,
          id: req.session.userID,
        },
      });
    } else {
      return next(new CustomError('Please Check your password', 400));
    }
  });
};

exports.logout = async (req, res, next) => {
  req.session.destroy(()=> {
    res.json({success:true})
  })
}
