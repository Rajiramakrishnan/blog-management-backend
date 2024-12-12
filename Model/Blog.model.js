const mongoose = require("mongoose");
const {Schema, model } = mongoose;
const BlogSchema = Schema(
  {
    title: {
      required: true,
      type: String,
    },
    category:{
      required: true,
      type: String,
    },
    postContent:{
        require:true,
        type:String,
    },
  },
  { timestamps: true }
);

const BlogModel = model("Blog",BlogSchema);
module.exports = {BlogModel };
