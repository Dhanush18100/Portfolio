const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { sendContactNotification } = require('../utils/emailService');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: error.message });
  }
});

// Create new message
router.post('/', async (req, res) => {
  try {
    // Validate required fields
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: 'Please provide all required fields: name, email, subject, and message'
      });
    }

    // Create and save message
    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });
    const savedMessage = await newMessage.save();
    
    try {
      // Attempt to send email notification
      await sendContactNotification({
        name,
        email,
        subject,
        message
      });
      
      res.status(201).json({
        message: 'Message sent successfully!',
        data: savedMessage
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Message is saved but email failed
      res.status(201).json({
        message: 'Message saved but email notification failed. We will still process your request.',
        data: savedMessage,
        emailError: true
      });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      message: 'Failed to process your message. Please try again later.',
      error: error.message 
    });
  }
});

// Delete message
router.delete('/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    await message.deleteOne();
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 