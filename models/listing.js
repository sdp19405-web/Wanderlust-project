const mongoose=require("mongoose");
const Schema=mongoose.Schema; //variable Schema created
const listingSchema=new Schema({ // Schema is created
    title:{
        type:String,
        required:true,
    },
    description:String,
   image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://unsplash.com/photos/an-aerial-view-of-a-winding-road-in-the-mountains-i0Duiw6jYu4",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/an-aerial-view-of-a-winding-road-in-the-mountains-i0Duiw6jYu4"
          : v,
    },
  },
    price:Number,
    location:String,
    country:String,
});
const  Listing=mongoose.model("Listing", listingSchema); //listing-model name based on listing schema(it defines strucutre)
module.exports=Listing;