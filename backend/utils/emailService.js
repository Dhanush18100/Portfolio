const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactNotification = async ({ name, email, subject, message }) => {
  try {
    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER, 
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};

module.exports = { sendContactNotification };
