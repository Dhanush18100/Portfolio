const mongoose = require('mongoose');
const Message = require('./models/Message');

mongoose.connect('mongodb+srv://dhanushnayak100:xC1eqnR0Pw1vRX5N@cluster0.yiri50b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    console.log('\nAll Messages:');
    if (messages.length === 0) {
      console.log('No messages found in the database');
    } else {
      messages.forEach((msg, index) => {
        console.log(`\nMessage ${index + 1}:`);
        console.log('Name:', msg.name);
        console.log('Email:', msg.email);
        console.log('Subject:', msg.subject);
        console.log('Message:', msg.message);
        console.log('Created At:', msg.createdAt);
        console.log('------------------------');
      });
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
  } finally {
    mongoose.connection.close();
  }
})
.catch(err => {
  console.error('MongoDB Connection Error:', err);
  process.exit(1);
}); 