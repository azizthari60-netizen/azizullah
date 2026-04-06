const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }

  try {
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    return res.status(201).json({ success: true, message: 'Message received. I will be in touch soon!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
