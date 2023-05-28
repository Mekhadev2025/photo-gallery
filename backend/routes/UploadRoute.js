const { Router } = require("express");
const uploadMiddleWare = require("../middlewares/MulterMiddleware");

const UploadModel = require("../models/UploadModel");

const router = Router();

router.get("/api/get", async (req, res) => {
  const allPhotos = await UploadModel.find().sort({ createdAt: "descending" });
  res.send(allPhotos);
});

router.post("/api/save", uploadMiddleWare.single("photo"), (req, res) => {
  if (!req.file) {
    // Handle missing file error
    return res.status(400).send("No file uploaded.");
  }

  const photo = req.file.filename;

  console.log(photo);

  UploadModel.create({ photo: photo })
    .then((data) => {
      console.log("Uploaded successfully");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error uploading file.");
    });
});

module.exports = router;
