const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  // create a course from Course model with datas which come from the request body.
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      course,
    });
  } catch {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
