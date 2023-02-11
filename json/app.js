const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

/**
 * @swagger
 * /articles:
 *   get:
 *     description: Returns a list of articles
 *     responses:
 *       200:
 *         description: A list of articles
 */
app.get("/articles", (req, res) => {
    res.send("Articles GET request");
  });

const swagger = require("./swagger");

swagger(app);