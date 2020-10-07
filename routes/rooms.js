const roomRouter = require("express").Router();
let Rooms = require("../models/room");

roomRouter.route("/").get((req, res) => {
  Rooms.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

roomRouter.route("/addNewRoom").post((req, res) => {
  const { roomtype, rooms, beds, utilitise, price } = req.body;

  const newRoom = new Rooms({
    roomtype,
    rooms,
    beds,
    utilitise,
    price,
  });

  newRoom.save()
    .then(() => res.json("Room added sucessfully!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = roomRouter;
