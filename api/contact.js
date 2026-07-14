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

    // Use URLSearchParams instead of FormData to avoid relying on browser globals
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('message', message);
    params.append('_subject', `New message from ${name}`);
    params.append('_replyto', email);
    params.append('_captcha', 'false');
    params.append('_template', 'table');

    const response = await fetch('https://formsubmit.co/ajax/wsriraj10@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString(),
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      // If response is not JSON, use the raw text
      data = { message: responseText || 'Unknown error' };
    }

    if (!response.ok) {
      console.error('FormSubmit error:', response.status, responseText);
      return res.status(response.status).json({ message: data?.message || 'Failed to send message' });
    }

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ message: 'Server error sending message' });
  }
}
