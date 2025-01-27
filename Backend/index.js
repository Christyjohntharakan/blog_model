// index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB using mongoose
mongoose.connect("mongodb://localhost:27017/blogapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find();  
    res.send(data);  // Return data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching posts" });  // Handle errors
  }
});


app.post("/add", async (req, res) => {
  try {
    const { title, body, imageUrl } = req.body;  // Destructure data from the request body

    // Check if both title and body are provided
    if (!title || !body) {
      return res.status(400).send({ message: "Title and body are required" });
    }

    const newPost = new BlogModel({
      title,
      body,
      imageUrl: imageUrl || "",  
    });

    await newPost.save();

    res.status(201).send({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating post" });  
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
