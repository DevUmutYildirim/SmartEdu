const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    // create a Category from Category model with datas which come from the request body.
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllCategorys = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).render("Categories", {
      categories,
      page_name: "Categories",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    // catch the req.params.slug and define as Category
    const category = await category.findOne({ slug: req.params.slug });
    // render Category variable to Category template.
    res.status(200).render("Category", {
      category,
      page_name: "Categorys",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
