

const express = require('express'); // Framework web para Node.js

const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    });
});
app.use('/', route);

module.exports = app;