const router = require("express").Router();
let Customer = require("../models/customer");

router.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/addNewCustomer").post((req, res) => {
  const { customerName, email, phoneNumber, passportNumber, rooms } = req.body;

  const newCustomer = new Customer({
    customerName,
    email,
    phoneNumber,
    passportNumber,
    rooms,
  });

  newCustomer.save()
    .then(() => res.json("Customer added sucessfully!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
