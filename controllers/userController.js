const User = require("../models/User");
// const userController =

const userController = {
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("friends")
      .populate("thoughts")
      .then((dbUsers) =>
        !dbUsers
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(dbUsers)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUsers) => {
        if (!dbUsers) {
          return res.status(404).json({ message: "No such User exists" });
        }
      })
      .then((course) =>
        !course
          ? res.status(404).json({
              message: "User deleted",
            })
          : res.json({ message: "User successfully deleted" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


addFriend(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: {friends: req.params.friendsId}}, {new: true})
    .then((dbUsers) => {
      if (!dbUsers) {
        return res.status(404).json({ message: "No such User exists" });
      }
      res.json(dbUsers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

removeFriend(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: {friends: req.params.friendsId}}, {new: true})
    .then((dbUsers) => {
      if (!dbUsers) {
        return res.status(404).json({ message: "No such User exists" });
      }
      res.json(dbUsers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
};
module.exports = userController;