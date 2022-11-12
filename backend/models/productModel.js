const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the product name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please enter the product description"]
  },
  price: {
    type: Number,
    required: [true, "Please enter the product price"],
    maxLength: [8, "Price of the product cannot exceed 8 figures"]
  },
  ratings: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, "Please enter the product category"]
  },
  Stock: {
    type: Number,
    required: [true, "Please enter the product stock"],
    maxLength: [4, "Product stock cannot exceed 4 characters"],
    default: 1
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name: {
        type: String,
        required: true
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Product", productSchema)