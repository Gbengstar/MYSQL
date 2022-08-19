const express = require('express');
const { database } = require('./app/configuration/connectDB');
const { BioRouter } = require('./app/route/bioRoute');

const app = express();
app.use(express.json());

app.use('/bio', BioRouter);

app.all('*', (req, res) =>
  res.status(404).json({ status: 'fail', message: 'url not found' })
);
const PORT = process.env.PORT || 1881;
database.sequelize
  .authenticate()
  .then(() => {
    console.log('...............database connected!..............');
    app.listen(PORT, () =>
      console.log(`'...............server connected on ${PORT}..............`)
    );
  })
  .catch((e) => {
    console.log(e);
    console.log('........error occured while connecting to database.........');
  });
