const roomRouter=require('express').Router();
let Rooms=require('../models/room')

roomRouter.route('/').get((req,res)=>{
    Rooms.find()
    .then(rooms=>res.json(rooms))
    .catch(err=>res.status(400).json('Error:'+err));
});

roomRouter.route('/addNewRoom').post((req,res)=>{
    const roomtype=req.body.roomtype;
    const rooms=req.body.rooms;
    const beds=Number(req.body.beds);
    const utilitise=req.body.utilitise;
    const price=Number(req.body.price)

    const newRoom=new Rooms({
        roomtype,
        rooms,
        beds,
        utilitise,
        price
    })
    
    newRoom.save()
    .then(()=>res.json('Room added sucessfully!'))
    .catch(err=>res.status(400).json('Error:'+err))

})

module.exports=roomRouter