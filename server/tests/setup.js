const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.test" });

beforeAll(async () => {
  await mongoose.connect(process.env.TEST_DB_URI);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
