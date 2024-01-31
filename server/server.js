const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 9000;

app.use(cors());

app.use("/", (req, res) => {
    fetch("")
    res.json({ message : "hello world!" });
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})