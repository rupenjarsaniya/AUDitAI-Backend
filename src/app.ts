import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Application is listening at http://localhost:${port}`);
});
