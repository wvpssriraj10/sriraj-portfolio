// Vercel Serverless Function to proxy contact form submissions to FormSubmit
// This avoids CORS or production restrictions when calling from the browser

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('_subject', `New message from ${name}`);
    formData.append('_replyto', email);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    const response = await fetch('https://formsubmit.co/ajax/wsriraj10@gmail.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({ message: data?.message || 'Failed to send message' });
    }

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error sending message' });
  }
}


