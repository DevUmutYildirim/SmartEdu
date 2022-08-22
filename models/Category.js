const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
});
// We use slugify middleware here.
// Before send the schema to db, we create a slug using this.name
// and we use this slug in http://localhost300/:id as id
// and we don't see id in the link, we see name slug.
CategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
