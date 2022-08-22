const Course = require("../models/Course");
const Category = require("../models/Category");

exports.createCourse = async (req, res) => {
  try {
    // create a course from Course model with datas which come from the request body.
    const course = await Course.create(req.body);

    res.status(201).json({
      status: "success",
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    // catch the parameter comes from the request query.
    const categorySlug = req.query.categories;
    // find the category from the Category model and it has categorySlug slug
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category: category._id };
    }

    const courses = await Course.find(filter);
    const categories = await Category.find();

    res.status(200).render("courses", {
      courses,
      categories,
      page_name: "courses",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    // catch the req.params.slug and define as course
    const course = await Course.findOne({ slug: req.params.slug });
    // render course variable to course template.
    res.status(200).render("course", {
      course,
      page_name: "courses",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
