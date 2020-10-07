const router=require('express').Router();
let Customer=require('../models/customer')

router.route('/').get((req,res)=>{
    Customer.find()
    .then(customers=>res.json(customers))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/addNewCustomer').post((req,res)=>{
    const customerName=req.body.customerName;
    const email=req.body.email;
    const phoneNumber=Number(req.body.phoneNumber);
    const passportNumber=Number(req.body.passportNumber);
    const rooms=req.body.rooms

    const newCustomer=new Customer(
        {
            customerName,
            email,
            phoneNumber,
            passportNumber,
            rooms
        }
        )
    
    newCustomer.save()
    .then(()=>res.json('Customer added sucessfully!'))
    .catch(err=>res.status(400).json('Error:'+err))

})

module.exports=router