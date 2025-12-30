import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // To make this work for real, you need to add RESEND_API_KEY to your Vercel Environment Variables.
    const apiKey = process.env.RESEND_API_KEY;
    
    if (apiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Kainuo Website <onboarding@resend.dev>',
          to: ['contact@kainuotech.com'],
          subject: `New Contact Form: ${subject || 'No Subject'}`,
          reply_to: email,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #1a1a1a;">
              <h2 style="color: #D4AF37;">New Message from Kainuo Website</h2>
              <hr style="border: 0; border-top: 1px solid #eee;" />
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px; padding: 15px; background: #f9f7f2; border-radius: 8px;">
                <strong>Message:</strong><br/>
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Resend API Error:', errorData);
        throw new Error('Failed to deliver email via service');
      }
    } else {
      // If no API key, just log and simulate success (for development)
      console.log('RESEND_API_KEY not found. Simulating successful send:', { name, email, subject, message });
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}

