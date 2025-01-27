// models.js
const mongoose = require('mongoose');

// Define the schema for the blog posts
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,  // Title is required
    },
    content: {
      type: String,
      required: true,  // Content is required
    },
    img_url: {
      type: String,
      default: '',  // Optional, defaults to empty string
    },
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt
);

// Create the model for the Blog schema
const BlogModel = mongoose.model('Blog', blogSchema);

// Export the model to be used in other files
module.exports = BlogModel;
