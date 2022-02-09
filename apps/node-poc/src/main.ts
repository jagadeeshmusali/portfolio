import http = require('http');
import express = require('express');
const port = process.env.PORT || 3000;
const handler = (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
}
const app = express();
const server = http.createServer(handler);

app.get('/', (req, res) => {
    res.json({message:'Hello World node poc!'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
