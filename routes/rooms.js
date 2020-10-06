const roomRouter=require('express').Router();
let Rooms=require('../models/room')

roomRouter.route('/').get((req,res)=>{
    Rooms.find()
    .then(rooms=>res.json(rooms))
    .catch(err=>res.status(400).json('Error:'+err));
});

roomRouter.route('/createNew').post((req,res)=>{
    const customerName=req.body.customerName;
    const roomtype=req.body.roomtype;
    const beds=Number(req.body.beds);
    const utilitis=req.body.utilitis;

    const newRoom=new Rooms({
        customerName,
        roomtype,
        beds,
        utilitis 
    })
    
    newRoom.save()
    .then(()=>res.json('Room added sucessfully!'))
    .catch(err=>res.status(400).json('Error:'+err))

})

module.exports=roomRouter