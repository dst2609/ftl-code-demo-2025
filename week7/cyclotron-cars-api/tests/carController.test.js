const request = require("supertest");
const express = require("Express");
const carModel = require("../models/carModel");

const app = express();
app.use(express.json());
app.use("/api/cars", require("../routes/carRoutes"));

// Mock the carModel functions


// Start writing test cases and test suite
describe("Car Controller", () => {

});
