const { biodataModel } = require('../model/bioData');

exports.create_bio = async (req, res) => {
  const { name, cgpa, age } = req.body;

  try {
    const bio = await biodataModel.create({
      name,
      age,
      cgpa,
    });
    res.status(201).json({ status: 'success', bio });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 'fail', message: 'error occur' });
  }
};
