import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    console.log("sending to this email:", email)

    await resend.emails.send({
      from: "Visualisai <onboarding@resend.dev>",
      to: "rakeshjhanda9958@gmail.com",
      subject: "You're on the Waitlist 🚀",
      html: `<p>Thanks for joining Visualisai! 🎉<br/> We'll notify you as soon as we launch.</p>`,
    });

    await resend.emails.send({
      from: "Visualisai <onboarding@resend.dev>",
      to: "rakeshjhanda9958@gmail.com", 
      subject: "New Waitlist Signup ✨",
      html: `<p>${email} just joined your waitlist!</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
