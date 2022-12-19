const User = require('../models/User');
const Movie = require('../models/Movie');



exports.getUserMovies = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID).populate('watched_movies');
    res.status(200).json({
      status: 'success',
      data:user.watched_movies,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().where('vote_average').gt(9).sort({
      vote_average: -1,
    });
    res.status(200).json({
      status: 'success',
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};


