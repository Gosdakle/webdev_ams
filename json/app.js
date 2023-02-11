const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    database: 'article',
    user: 'postgres',
    password: 'password',
});

client.connect();

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
 *     tags:
 *       - Articles
 *     summary: Get articles
 *     description: Returns a list of articles
 *     responses:
 *       200:
 *         description: A list of articles
 */
app.get("/api/articles", (req, res) => {
    const query = 'SELECT * FROM article_international';

    client.query(query, (error, result) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json(result.rows);
        }
    });
});

const swagger = require("./swagger");

swagger(app);