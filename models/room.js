const mongoose=require('mongoose');

 const Schema=mongoose.Schema;
 

 const roomSchema=new Schema({
    customerName:{type:String,required:true},
    roomtype:{type:String,required:true},
    beds:{type:Number},
    utilitis:{type:String}
 },
 {
    timestamps: true,
}
 )

 const Rooms=mongoose.model('Rooms',roomSchema);

 module.exports=Rooms