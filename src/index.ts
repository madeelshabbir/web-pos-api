import express from 'express';

const { PORT } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
