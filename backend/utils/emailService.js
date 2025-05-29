const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendContactNotification = async (contactData) => {
  const { name, email, subject, message } = contactData;

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: 'dhanush.nayak.100@gmail.com',
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    // Verify connection configuration
    await transporter.verify();
    console.log('SMTP connection verified');

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    throw error;
  }
};

module.exports = {
  sendContactNotification
}; 