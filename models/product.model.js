const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Enter recipe title"],
        },
        ingredients: {
            type: [String], // List of ingredient names
            required: [true, "Enter at least one ingredient"],
        },
        description: {
            type: [String],
            required: false,
        },
        author: {
            type: String,
            required: true,
        },
        instructions: {
            type: String, // Cooking steps
            required: [true, "Enter cooking instructions"],
        },
        prepTime: {
            type: Number, // Time in minutes
            required: false,
        },
        cookTime: {
            type: Number, // Time in minutes
            required: false,
        },
        likes: {
            type: Number,
            required: false,
            default: 0, // Set default value to 0
        },
        servings: {
            type: Number, // How many people it serves
            required: false,
            default: 1,
        },
        category: {
            type: String, // Example: "Dessert", "Main Course"
            required: false,
        },
        imageUrl: {
            type: String, // URL of the recipe image
            required: false,
        },
        tags: {
            type: [String],
            required: false
        },
        difficulty: {
            type: String, enum: ["Easy", "Medium", "Hard"],
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
