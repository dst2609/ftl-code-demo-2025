const request = require("supertest");
const express = require("Express");
const carModel = require("../models/carModel");

const app = express();
app.use(express.json());
app.use("/api/cars", require("../routes/carRoutes"));

// Mock the carModel functions
jest.mock("../models/carModel")

// Start writing test cases and test suite
describe("Car Controller", () => {
  describe("GET /api/cars", () => {
    it("should return all cars", async () => {
      const mockCars = [{make: "Toyota", year: 2024}]
      carModel.getAllCars.mockResolvedValue(mockCars)

      const response = await request(app).get("/api/cars")

      expect(response.status).toBe(200)
      expect(response.body).toEqual(mockCars)
    })
  })

  describe("GET api/cars/:id", () => {
    it('should return a car if it exists', async () => {
      const mockCar = { id: 1, make: "Toyota", year: 2021 };

      carModel.getCarById.mockImplementation((id) => {
        if (parseInt(id) === 1) {
          return Promise.resolve(mockCar)
        } else {
          return Promise.resolve(null)
        }
      })

      const response = await request(app).get("/api/cars/1")

      expect(response.status).toBe(200)
      expect(response.body).toEqual(mockCar)
    })

    it("should return 404 if car is not found", async () => {
      carModel.getCarById.mockResolvedValue(null);

      const response = await request(app).get("/api/cars/999");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Car not found" });
    });
  })
});
