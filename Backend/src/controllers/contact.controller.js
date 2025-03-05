const Contact = require('../models/contact.model');

exports.contact = async (req, res) => {
  try {
    console.log('Contact request received:', req.body); // Add this line
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error); // Add this line
    res.status(400).json({ error: error.message });
  }
};